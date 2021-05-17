import TimezoneObject from "./timezone-object.js";

/**
 * @extends {TimezoneObject}
 */
class TimezoneCity extends TimezoneObject {
    /**
     * Identifies timezone city as a timezone object.
     * @param {String} cityName city name.
     * @param {TimezoneRegion} timezoneRegion region to which this city belongs.
     * @param {Boolean} selectable is city selectable as a timezone. 
     */
    constructor(cityName, timezoneRegion, selectable) {
        super(cityName, timezoneRegion, selectable);
    }
}

export default TimezoneCity;