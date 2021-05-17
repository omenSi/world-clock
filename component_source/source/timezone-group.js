import TimezoneRegion from "./timezone-region.js";
import TimezoneObject from "./timezone-object.js";

/**
 * @extends {TimezoneObject}
 */
class TimezoneGroup extends TimezoneObject {
    /**
     * Identifies timezone group as a timezone object.
     * @param {String} groupName group name.
     * 
     */
    constructor(groupName) {
        super(groupName, null);
        this.regions = {};
    }

    /**
     * Add a parent-child relationship between group and region.
     * Save newly added region in the current timezone group.
     * @param {String} regionName region name
     * @param {Boolean} selectable is region selectable as a timezone. 
     * @public
     * @returns {TimezoneObject} newly added region.
     */
    addRegion(regionName, selectable = false) {
        if (!this.regions[regionName]) {
            this.regions[regionName] = new TimezoneRegion(regionName, this, selectable);
            return this.regions[regionName];
        }
    }

    /**
     * Add a parent-child relationship between group and region.
     * Add a parent-child relationship between region and city.
     * Save newly added region in the current timezone group.
     * Save newly added city in the newly created timezone region.
     * @param {String} regionName region name.
     * @param {String} cityName city name.
     * @param {String} regionSelectable is region selectable as a timezone. 
     * @param {String} citySelectable is city selectable as a timezone.
     * @public
     */
    addRegionCity(regionName, cityName, regionSelectable = false, citySelectable = false) {
        if (!this.regions[regionName]) {
            const region = this.addRegion(regionName, regionSelectable);
            region.addCity(cityName, citySelectable);
        } else {
            this.regions[regionName].addCity(cityName, citySelectable);
        }
    }
}

export default TimezoneGroup;