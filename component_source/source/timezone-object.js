import WorldClockError from "./error.js";
import { Datatype } from "./utils.js";

class TimezoneObject {
    /**
     * General timezone part class.
     * @param {String} name timezone part name.
     * @param {TimezoneObject} parent timezone part parent.
     * @param {Boolean} selectable is part selectable as a timezone.
     */
    constructor(name, parent, selectable = false) {
        this.parent = parent;
        this.name = name;
        this._selectable = selectable;
    }

    /**
     * Returns selectable state of a TimezoneObject in a timezones list.
     * @public
     * @returns selectable state of a TimezoneObject in a timezones list.
     */
    get selectable() {
        return this._selectable;
    }

    /**
     * Property *selectable* setter.
     * @param {Boolean} v should this TimezoneObject be selectable.
     * @public 
     */
    set selectable(v) {
        if (typeof (v) !== Datatype.BOOLEAN) {
            throw new WorldClockError("Cannot set TimezoneObject selectable flag, because input is not a Boolean.");
        }
        this._selectable = v;
    }

    /**
     * Recursively generates String representation of the timezone for widget face.
     * Format: "<TimezoneGroup>, <TimezoneRegion>, <TimezoneCity>"
     * @public
     * @returns String representation of the timezone for widget face.
     */
    get timezoneName() {
        let parent = this.parent;
        let n = `${this.name}`;
        while (parent) {
            n = `${parent.name}, ${n}`;
            parent = parent.parent;
        }
        return n;
    }

    /**
     * Recursively generates String representation of the timezone.
     * Format: "<TimezoneGroup>/<TimezoneRegion>/<TimezoneCity>"
     * @public
     * @returns {String} String representation of the timezone.
     */
    get timezone() {
        let parent = this.parent;
        let n = `${this.name}`;
        while (parent) {
            n = `${parent.name}/${n}`;
            parent = parent.parent;
        }
        return n;
    }
}

export default TimezoneObject;