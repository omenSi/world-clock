import TimezoneCity from "./timezone-city.js";
import TimezoneObject from "./timezone-object.js";

/**
 * @extends {TimezoneObject}
 */
class TimezoneRegion extends TimezoneObject {
    /**
     * Identifies timezone region as a timezone object.
     * @param {String} regionName region name.
     * @param {TimezoneGroup} timezoneGroup group to which this city belongs.
     * @param {Boolean} selectable is region selectable as a timezone. 
     */
    constructor(regionName, timezoneGroup, selectable) {
        super(regionName, timezoneGroup, selectable);
        this.cities = {};
    }

    /**
     * Add a parent-child relationship between region and city.
     * Save newly added city in the current timezone region.
     * @param {String} cityName city name
     * @param {Boolean} selectable is city selectable as a timezone. 
     * @public
     */
    addCity(cityName, selectable = false) {
        if (!this.cities[cityName]) {
            this.cities[cityName] = new TimezoneCity(cityName, this, selectable);
        }
    }
}

export default TimezoneRegion;