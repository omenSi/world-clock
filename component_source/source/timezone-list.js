import Config from "./config.js";
import TemplateBuilder from "./template-builder.js";
import WorldClockError from "./error.js";
import { Datatype } from "./utils.js";

class TimezoneList {
    /**
     * Class responsible for managing timezone list interaction with user.
     * @param {Menu} menu World Clock menu component.
     * @throws {WorldClockError} if any timezone list component is missing in the DOM.
     */
    constructor(menu) {
        this._menu = menu;
        this._listElm = document.getElementById(Config.TimezoneListElmId);
        if (!this._listElm) throw new WorldClockError("Timezone list element does not exist.");

        this._populateList();
        this._listElm.addEventListener("click", this._on_click.bind(this));
    }

    /**
     * Allows to access World Clock menu component.
     * @public
     * @returns {Menu} World Clock menu component.
     */
    get menu() {
        return this._menu;
    }

    /**
     * Handles user click on one of the timezone list elements.
     * @param {MouseEvent} e mouse event object.
     * @private
     */
    _on_click(e) {
        if (e.target.dataset.obj && e.target.classList.contains(Config.CSS.Selectable)) {
            let part = null;
            switch (e.target.dataset.obj) {
                case Config.TimezoneListObjectTypes.Group:
                    part = this.menu.clock.findTimezonePart(Config.TimezoneListObjectTypes.Group, e.target.dataset.timezonePartName);
                    break;
                case Config.TimezoneListObjectTypes.Region:
                    part = this.menu.clock.findTimezonePart(Config.TimezoneListObjectTypes.Region, e.target.dataset.timezonePartName);
                    break;
                case Config.TimezoneListObjectTypes.City:
                    part = this.menu.clock.findTimezonePart(Config.TimezoneListObjectTypes.City, e.target.dataset.timezonePartName);
                    break;
            }
            if (part) {
                this._scrollToTop();
                this.menu.clock.selectCurrentTimezone(part);
                this.menu.timezoneSearch.clearSearch();
                this.menu.close();
            }
        }
    }

    /**
     * Scrolls timezone list to the top.
     * @private
     */
    _scrollToTop() {
        this._listElm.scroll(0, 0);
    }

    /**
     * Populates the list from all available timezones.
     * Builds HTML for each of different TimezoneObject part using TemplateBuilder.
     * @private
     */
    _populateList() {
        const groups = this.menu.clock.timezoneGroups;
        // Append groups.
        Object.values(groups).forEach(group => {
            const groupEl = TemplateBuilder.buildTimezoneListGroup(group.name, group.selectable);
            this._listElm.appendChild(groupEl);

            // Append regions.
            Object.values(group.regions).forEach(region => {
                const regionEl = TemplateBuilder.buildTimezoneListRegion(region.name, region.selectable);
                this._listElm.appendChild(regionEl);

                // Append cities.
                Object.values(region.cities).forEach(city => {
                    const cityEl = TemplateBuilder.buildTimezoneListCity(city.name, city.selectable);
                    this._listElm.appendChild(cityEl);
                });
            });
        });
    }

    /**
     * Recursively find element of specified type in the list before the provided one.
     * @param {HTMLLIElement} element list element 
     * @param {String} type one of the values from ["group", "region", "city"] 
     * @returns {HTMLLIElement} provided or founded element.
     * @private  
     */
    _findListElementOfTypeBeforeThisElement(element, type) {
        if (!Object.values(Config.TimezoneListObjectTypes).includes(type)) {
            throw new WorldClockError(`Unrecongnized timezone part type - ${typeof (type)}.`);
        }
        let prevSibling = element;
        let found = false;
        while (prevSibling && !found) {
            prevSibling = prevSibling.previousSibling;
            if (prevSibling.dataset.obj === type) {
                found = true;
            }
        }

        return prevSibling;
    }

    /**
     * Filter timezone list elements by user input, which defines the name of TimezoneObject.
     * @param {String} userInput string value of user input. 
     * @public
     */
    filterTimezonesByUserInput(userInput) {
        if (typeof (userInput) !== Datatype.STRING) {
            throw new WorldClockError(`Cannot filter list by provided value - ${userInput}. Please provide a String.`);
        }

        const filter = userInput.trim().toLowerCase();
        let group = null;
        let region = null;
        let filtered = [];
        Array.from(this._listElm.children).forEach(li => {
            if (li.innerText.toLowerCase().indexOf(filter) > -1) {
                switch (li.dataset.obj) {
                    case Config.TimezoneListObjectTypes.Group:
                        filtered.push(li);
                        break;
                    case Config.TimezoneListObjectTypes.Region:
                        group = this._findListElementOfTypeBeforeThisElement(li, Config.TimezoneListObjectTypes.Group);
                        if (group) filtered.push(group);
                        filtered.push(li);
                        break;
                    case Config.TimezoneListObjectTypes.City:
                        group = this._findListElementOfTypeBeforeThisElement(li, Config.TimezoneListObjectTypes.Group);
                        region = this._findListElementOfTypeBeforeThisElement(li, Config.TimezoneListObjectTypes.Region);
                        if (group) filtered.push(group);
                        if (region) filtered.push(region);
                        filtered.push(li);
                        break;
                }
            }
        });

        Array.from(this._listElm.children).forEach(li => {
            if (filtered.includes(li)) {
                li.classList.remove(Config.CSS.Hidden);
            } else {
                li.classList.add(Config.CSS.Hidden);
            }
        });
    }
}

export default TimezoneList;