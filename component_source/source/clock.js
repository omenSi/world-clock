import WorldClockError from "./error.js";
import { Datatype } from "./utils.js";
import Menu from "./menu.js";
import WidgetFace from "./widget-face.js";
import TimezoneGroup from "./timezone-group.js";
import Config from "./config.js";
import TimezoneRegion from "./timezone-region.js";
import TimezoneCity from "./timezone-city.js";
import TimezoneLocalStorage from "./storage.js";
import TimezoneObject from "./timezone-object.js";
import TemplateBuilder from "./template-builder.js";
import { CSS } from "./css.js";

/**
 * World Clock API component.
 */
class Clock {
    /**
     * @param {Object} params - Object containing all configurable parameters.
     * @param {String} params.container - container element ID.
     * @param {String} [params.theme] - widget color theme. Defaul value = "light". Available values = ["light", "dark"].
     * @param {Boolean} [params.showSeconds=true] - show seconds in the clocks? Default value = true.
     * @param {Boolean} [params.showDate=true] - show date in the widget? Default value = true.
     */
    constructor(params) {
        this._params = params;
        this._frameId = null;
        this._startTimestamp = null;
        this._parseParams(params);
        this._setContainer(params);
        this._init();
    }

    /**
     * Get all currently available timezone parts.
     * Returns a product of *this.getAllAvailableTimezones()*, 
     * because that is saved to the Clock at the initialization time.
     * @returns {Object} all currently available timezone parts.
     * @public
     * @readonly Property is read-only and cannot be modified.
     */
    get timezoneGroups() {
        return this._timezoneGroups;
    }

    /**
     * Initialize widget.
     * @throws {WorldClockError} if initialization has failed.
     * @private
     */
    async _init() {
        if (!this._checkMomentDependancies()) {
            await this._importMomentDependancies();
        }
        try {
            this._importOtherDependancies();
            this._timezoneGroups = this.getAllAvailableTimezones();
            this._localStorage = new TimezoneLocalStorage();
            const timezone = this._findReconstructedTimezoneObject(this._localStorage.getTimezone());
            if (timezone) this.selectCurrentTimezone(timezone);
            this._createWidget();
        } catch (err) {
            console.error(err);
            throw new WorldClockError(`Failed to setup clock as of error - ${err}.`);
        }
    }

    /**
     * Method to parse all given by user parameters.
     * @param {Object} params - Object containing all configurable parameters.
     * @param {String} params.container - container element ID.
     * @param {String} [params.theme] - widget color theme. Defaul value = "light". Available values = ["light", "dark"].
     * @param {Boolean} [params.showSeconds=true] - show seconds in the clocks? Default value = true.
     * @param {Boolean} [params.showDate=true] - show date in the widget? Default value = true.
     * @throws {WorldClockError} if required parameter was wrong (not defined, not a String).
     * @private
     */
    _parseParams(params = {}) {
        this.setTimeSecondsShow(params.showSeconds);
        this.setDateShow(params.showDate);
        this.setTheme(params.theme);
    }

    /**
     * Widget checks if website already has necessary dependancies - **moment.js**, **moment-timezone.js**.
     * @returns {Boolean} are dependancies fulfilled.
     * @private
     */
    _checkMomentDependancies() {
        return window.moment && window.moment.tz;
    }

    /**
     * Dinamically import CSS of the widget.
     * @private
     */
    _importOtherDependancies() {
        if (!document.getElementById(Config.WidgetStyleElmId)) {
            const style = document.createElement("style");
            style.innerHTML = CSS;
            style.id = Config.WidgetStyleElmId;
            document.head.appendChild(style);
        }
    }

    /**
     * Dinamically import dependancies - **moment.js**, **moment-timezone.js**, if they were not found in the website.
     * This method is called after *this._checkMomentDependancies()*.
     * @returns {Promise} fulfilled or rejected Promise, which is being waited in the initialization of the widget.
     * @private
     */
    _importMomentDependancies() {
        return new Promise((resolve, reject) => {
            try {
                // Dynamically import JS packages. 
                const moment = document.createElement("script");
                const momentTimezone = document.createElement("script");
                moment.src = Config.MomentPath;
                momentTimezone.src = Config.MomentTimezonePath;
                moment.async = false;
                momentTimezone.async = false;
                document.body.appendChild(moment);
                moment.addEventListener("load", _ => document.body.appendChild(momentTimezone));
                momentTimezone.addEventListener("load", _ => resolve());
            } catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Method generates HTML for the widget and then calls *this._showWidget*,
     * which updates time and date text.
     * @private
     */
    _createWidget() {
        this.wrapper = TemplateBuilder.buildWidgetWrapper(this.theme);
        this.container.appendChild(this.wrapper);
        this.wrapper.appendChild(TemplateBuilder.buildWidgetFace(this.showDate));
        this.wrapper.appendChild(TemplateBuilder.buildMenu());

        this._widgetFace = new WidgetFace(this);
        this._menu = new Menu(this);
        this._showWidget();
    }

    /**
     * Display current time and date in the widget.
     * @private
     */
    _showWidget() {
        this._updateClock();
    }

    /**
     * Method to parse all given by user parameters.
     * @param {Object} params - Object containing all configurable parameters.
     * @param {String} params.container - container element ID.
     * @param {String} [params.theme] - widget color theme. Defaul value = "light". Available values = ["light", "dark"].
     * @param {Boolean} [params.showSeconds=true] - show seconds in the clocks? Default value = true.
     * @param {Boolean} [params.showDate=true] - show date in the widget? Default value = true.
     * @throws {WorldClockError} if required parameter - 'container' was wrong (not defined, not a String or no element exist in DOM).
     * @private
     */
    _setContainer(params = {}) {
        if (!params.container) {
            throw new WorldClockError("'container' parameter was not specified.");
        } else if (typeof (params.container) !== Datatype.STRING) {
            throw new WorldClockError("Please, define 'container' parameter properly.");
        }
        const cont = document.getElementById(params.container);
        if (!cont) {
            throw new WorldClockError(`Element with specified - ${params.container} element ID, does not exist.`);
        }
        this.container = cont;
    }

    /**
     * Find TimezoneObject within the available timezones given by *type* and *name*.
     * @param {String} type one of the types from ["group", "region", "city"]. 
     * @param {String} name name of the part that is being searched. For example - "Vilnius". 
     * @returns {null|TimezoneObject} null - if part was not found. TimezoneObject - otherwise.
     * @public
     */
    findTimezonePart(type, name) {
        if (!Object.values(Config.TimezoneListObjectTypes).includes(type)) {
            throw new WorldClockError(`Undefined timezone list element type - ${type}.`);
        }
        let part = null;
        switch (type) {
            case Config.TimezoneListObjectTypes.Group:
                part = this.findGroup(name);
                break;
            case Config.TimezoneListObjectTypes.Region:
                part = this.findRegion(name);
                break;
            case Config.TimezoneListObjectTypes.City:
                part = this.findCity(name);
                break;
        }

        return part;
    }

    /**
     * Search for a TimezoneGroup in all available timezones.
     * @param {String} name TimezoneGroup name, which is being searched. 
     * @returns {null|TimezoneGroup} null - if group was not found, TimezoneGroup - otherwise.
     * @public
     */
    findGroup(name) {
        const group = Object.values(this.timezoneGroups).find(group => group.name === name);
        return group === undefined ? null : group;
    }

    /**
     * Search for a TimezoneRegion in all available timezones.
     * @param {String} name TimezoneRegion name, which is being searched.
     * @returns {null|TimezoneRegion} null - if region was not found, TimezoneRegion - otherwise.
     * @public
     */
    findRegion(name) {
        let region = null;
        const groups = Object.values(this.timezoneGroups);
        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];
            region = Object.values(group.regions).find(region => region.name === name);
            if (region instanceof TimezoneRegion) return region;
        }
        return region === undefined ? null : region;
    }

    /**
     * Search for a TimezoneCity in all available timezones.
     * @param {String} name TimezoneCity name, which is being searched. 
     * @returns {null|TimezoneCity} null - if city was not found, TimezoneCity - otherwise.
     * @public
     */
    findCity(name) {
        let city = null;
        const groups = Object.values(this.timezoneGroups);
        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];
            const regions = Object.values(group.regions);
            for (let j = 0; j < regions.length; j++) {
                const region = regions[j];
                city = Object.values(region.cities).find(city => city.name === name);
                if (city instanceof TimezoneCity) return city;
            }
        }
        return city === undefined ? null : city;
    }

    /**
     * In order to set current timezone one of the timezone parts must be passed.
     * We automatically detect type of timezone part, then detect if input is recognized.
     * If input is recognized current selected timezone is updated.
     * Otherwise we throw WorldClockError.
     * @param {TimezoneObject} part TimezoneObject part, which should be selected.
     * @public
     */
    selectCurrentTimezone(part) {
        if (part instanceof TimezoneObject) {
            if (this._findReconstructedTimezoneObject(part)) {
                this._selectedTimezone = part;
                this._localStorage.saveTimezone(part);
            } else {
                throw new WorldClockError(`Undefined timezone element - ${part}.`);
            }
        } else {
            throw new WorldClockError(`Undefined timezone element type - ${part}.`);
        }
    }

    /**
     * Get all available timezone groups from moment-timezone.
     * In moment-timezone group, region, city is marked in this format: "Group/Region/City".
     * Method splits all strings by "/" and then collects all parts at index 0.
     * So we get a list of timezone group names.
     * @returns {Array} array of timezone group names.
     * @public
     */
    getTimezoneGroups() {
        const groups = new Set();
        moment.tz.names().forEach(timezone => { groups.add(timezone.split('/')[0]) });
        return groups;
    }

    /**
     * Show all available timezones, which are hierarchically related.
     * At the top of hierarchy lies TimezoneGroup Objects.
     * Returns this data structure: 
     * <pre><code>
     * {
     *      'timezone_group_name': TimezoneGroup()
     *      ...
     * }
     * </code></pre>
     * TimezoneRegion Objects are included into TimezoneGroup.
     * TimezoneCity Objects are included into TimezoneRegion.
     * @returns {Object} hierarchical object.
     * @public
     */
    getAllAvailableTimezones() {
        const tzEntries = moment.tz.names();

        // Gather timezone groups.
        const timezoneGroupNames = this.getTimezoneGroups();
        const timezoneGroups = {};
        timezoneGroupNames.forEach(timezoneGroupName => {
            timezoneGroups[timezoneGroupName] = new TimezoneGroup(timezoneGroupName);
        });

        // Fill in timezone regions and cities.
        tzEntries.forEach(timezoneString => {
            const parts = timezoneString.split('/');
            const group = parts[0];
            const region = parts[1];
            const city = parts[2];

            if (group && !region && !city) {
                timezoneGroups[group].selectable = true;
            }

            if (group && region && !city) {
                timezoneGroups[group].addRegion(region, true);
            }
            if (group && region && city) {
                timezoneGroups[group].addRegionCity(region, city, false, true);
            }
        });

        return timezoneGroups;
    }

    /**
     * Every second updates widget text (time, date, timezone).
     * @param {DOMHighResTimeStamp} timestamp used to track render time from requestAnimationFrame.
     * @private
     */
    _render(timestamp) {
        if (!this._startTimestamp) this._startTimestamp = timestamp;
        const timePassed = timestamp - this._startTimestamp;
        if (timePassed >= 1000) {
            this._startTimestamp = timestamp;
            this._updateClock();
        } else {
            this._frameId = requestAnimationFrame(this._render.bind(this));
        }
    }

    /**
     * Updates widget text (time, date, timezone) with the current widget configuration.
     * @private
     */
    _updateClock() {
        this._frameId = requestAnimationFrame(this._render.bind(this));
        if (this._selectedTimezone) {
            const timeFrame = moment.tz(this._selectedTimezone.timezone);
            this._updateWidgetDateTime(timeFrame);
            this._widgetFace.setTimezone(this._selectedTimezone.timezoneName);
        } else {
            const timeFrame = moment();
            this._updateWidgetDateTime(timeFrame);
            this._widgetFace.setTimezone("Local");
        }
    }

    /**
     * Invokes widget to update text (time, date) from a specified moment timeframe. 
     * @param {moment} timeFrame equivalent to *moment()* timeframe.
     * @private
     */
    _updateWidgetDateTime(timeFrame) {
        const time = this.showSeconds ? timeFrame.format(Config.DefaultTimeFormat) : timeFrame.format(Config.NoSecondsTimeFormat);
        const date = timeFrame.format(Config.DefaultDateFormat);
        this._widgetFace.setTime(time);
        this._widgetFace.setDate(date);
    }

    /**
     * Allows to verify if reconstructed TimezoneObject from LocalStorage (or user input) is valid or not.
     * @param {TimezoneObject} reconstructedTimezoneObject TimezoneObject which is constructed from storage or user input.
     * @returns {null|TimezoneObject} null - if TimezoneObject was not recognized. TimezoneObject - otherwise.
     * @private
     */
    _findReconstructedTimezoneObject(reconstructedTimezoneObject) {
        const groups = this.timezoneGroups;
        if (reconstructedTimezoneObject instanceof TimezoneObject) {
            if (reconstructedTimezoneObject instanceof TimezoneGroup) {
                if (groups[reconstructedTimezoneObject.name] !== undefined) {
                    return groups[reconstructedTimezoneObject.name];
                }
            } else if (reconstructedTimezoneObject instanceof TimezoneRegion) {
                for (let group of Object.values(groups)) {
                    for (let region of Object.values(group.regions)) {
                        if (region.name === reconstructedTimezoneObject.name) {
                            return region;
                        }
                    }
                }
            } else {
                for (let group of Object.values(groups)) {
                    for (let region of Object.values(group.regions)) {
                        for (let city of Object.values(region.cities)) {
                            if (city.name === reconstructedTimezoneObject.name) {
                                return city;
                            }
                        }
                    }
                }
            }
        }
        return null; // Not found.
    }

    /**
     * Validate and set widget theme.
     * If given value is not valid, light theme will be selected.
     * @param {String} themeValue controls which widget theme should be selected.
     * @public
     */
    setTheme(themeValue) {
        if (themeValue !== undefined && (typeof (themeValue) === Datatype.STRING) && [Config.Themes.Dark, Config.Themes.Light].includes(themeValue)) {
            this.theme = themeValue;
            if (this.container) {
                this.wrapper.classList.remove(Config.ThemeToCSS[Config.Themes.Dark], Config.ThemeToCSS[Config.Themes.Light]);
                this.wrapper.classList.add(Config.ThemeToCSS[themeValue]);
            }
        } else {
            this.theme = Config.Themes.Light;
        }
    }

    /**
     * Validate and set flag, which controls if widget should show date field.
     * Default value = true. 
     * @param {Boolean} value controls if widget should show date field.
     * @public
     */
    setDateShow(value) {
        if (value !== undefined && typeof (value) === Datatype.BOOLEAN) {
            this.showDate = value;
            if (this.container) {
                const dateField = document.getElementById(Config.DateElmId);
                if (value) {
                    dateField.classList.remove(Config.CSS.Hidden);
                } else {
                    dateField.classList.add(Config.CSS.Hidden);
                }
            }
        } else {
            this.showDate = true;
        }
    }

    /**
     * Validate and set flag, which controls if widget should show seconds.
     * Default = true.
     * @param {Boolean} value controls if widget should show seconds.
     */
    setTimeSecondsShow(value) {
        if (value !== undefined && typeof (value) === Datatype.BOOLEAN) {
            this.showSeconds = value;
        } else {
            this.showSeconds = true;
        }
    }

    /**
     * User Convenience theme selection property.
     * @public
     */
    static Theme = {
        Dark: Config.Themes.Dark,
        Light: Config.Themes.Light
    }
}

export default Clock;