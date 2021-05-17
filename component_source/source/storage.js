import TimezoneObject from "./timezone-object.js";
import Config from "./config.js";
import TimezoneGroup from "./timezone-group.js";
import WorldClockError from "./error.js";

class ClockLocalStorage {
    /**
     * Handles interaction with window.localStorage for saving/loading timezones from localStorage.
     * @param {Clock} clock World Clock API
     */
    constructor(clock) {
        this._clock = clock;
        this.storage = window.localStorage;
        this._key = Config.StorageKey;
    }

    /**
     * Wrapper for window.localStorage.setItem method.
     * @param {String} key String object key, which will allow to access saved data later.  
     * @param {Any} value Any value to be saven in localStorage.
     * @private
     */
    _setItem(key, value) {
        this.storage.setItem(key, value);
    }

    /**
     * Wrapper for window.localStorage.getItem method.
     * @param {String} key String object key, which allow to access saved data.  
     * @private
     * @returns {Any} Any saved value.
     */
    _getItem(key) {
        return this.storage.getItem(key);
    }

    /**
     * Save selected timezone to the local storage for reconstruction after page reload. 
     * @param {TimezoneObject} timezoneObject 
     * @throws {WorldClockError} if trying to save not a TimezoneObject.
     */
    saveTimezone(timezoneObject) {
        if (timezoneObject instanceof TimezoneObject) {
            this._setItem(Config.StorageKey, timezoneObject.timezone);
        } else {
            throw new WorldClockError(`Unrecongnized timezone part type - ${typeof (part)}.`);
        }
    }

    /**
     * Reconstruct currently saved timezone from the LocalStorage.
     * @public
     * @returns {null|TimezoneObject} null - no saved timezone, reconstructed TimezoneObject - otherwise.
     */
    getTimezone() {
        let timezone = null;
        const timezoneStr = this._getItem(Config.StorageKey);
        if (timezoneStr) {
            const parts = timezoneStr.split('/');
            const groupName = parts[0];
            const regionName = parts[1];
            const cityName = parts[2];

            if (groupName && !regionName && !cityName) {
                timezone = new TimezoneGroup(groupName);
            }
            if (groupName && regionName && !cityName) {
                const group = new TimezoneGroup(groupName);
                group.addRegion(regionName);
                timezone = group.regions[regionName];
            }
            if (groupName && regionName && cityName) {
                const group = new TimezoneGroup(groupName);
                group.addRegion(regionName);
                const region = group.regions[regionName];
                region.addCity(cityName);
                timezone = region.cities[cityName];
            }
        }

        return timezone;
    }
}

export default ClockLocalStorage;