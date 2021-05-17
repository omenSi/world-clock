import Config from "./config.js";
import WorldClockError from "./error.js";
import { Datatype, Utils } from "./utils.js";

class WidgetFace {
    /**
     * Class responsible for managing widget face updating.
     * @param {Clock} clock World Clock API.
     * @throws {WorldClockError} if any menu component is missing in the DOM.
     */
    constructor(clock) {
        this._clock = clock;

        this._clockElm = document.getElementById(Config.TimeElmId);
        this._dateElm = document.getElementById(Config.DateElmId);
        this._timezoneElm = document.getElementById(Config.TimezoneElmId);

        if (!this._clockElm) throw new WorldClockError("Clock element does not exist.");
        if (!this._dateElm) throw new WorldClockError("Date element does not exist.");
        if (!this._timezoneElm) throw new WorldClockError("Timezone element does not exist.");

        window.addEventListener("resize", _ => this._updateFontSizes());
        window.addEventListener("orientationchange", _ => this._updateFontSizes());
        this._updateFontSizes();
    }

    /**
     * Returns World Clock API.
     * @public
     * @returns {Clock} World Clock API
     */
    get clock() {
        return this._clock;
    }

    /**
     * Updates time HTML component in the DOM with the provided time text.
     * @param {String} timeString formatted time text.
     * @public
     */
    setTime(timeString) {
        if (typeof (timeString) !== Datatype.STRING) {
            throw new WorldClockError("Incorrect type for a time text.");
        }
        this._clockElm.innerText = timeString;
    }

    /**
     * Updates date HTML component in the DOM with the provided date text.
     * @param {String} dateString formatted date text.
     * @public
     */
    setDate(dateString) {
        if (typeof (dateString) !== Datatype.STRING) {
            throw new WorldClockError("Incorrect type for a date text.");
        }
        this._dateElm.innerText = dateString;
    }

    /**
     * Updates timezone HTML component in the DOM with the provided timezone text.
     * @param {String} timezoneString timezone text.
     * @public
     */
    setTimezone(timezoneString) {
        if (typeof (timezoneString) !== Datatype.STRING) {
            throw new WorldClockError("Incorrect type for a timezone text.");
        }
        this._timezoneElm.innerText = timezoneString;
    }

    /**
     * Updates font size of timezone, date and time HTML components in the DOM.
     * Font size is relevant to the parent container of the widget.
     * @private
     */
    _updateFontSizes() {
        const timezoneFontSize = Math.max(Math.min(this._timezoneElm.parentElement.clientWidth / (2 * 10), parseFloat(25)), parseFloat(15));
        const dateFontSize = Math.max(Math.min(this._dateElm.clientWidth / (2 * 10), parseFloat(25)), parseFloat(15));
        const clockFontSize = Math.max(Math.min(this._clockElm.clientWidth / (0.8 * 10), parseFloat(100)), parseFloat(30));
        if (timezoneFontSize + dateFontSize + clockFontSize + Utils.convertRemToPixels(2) <= this._clock.container.clientHeight) {
            this._timezoneElm.style.fontSize = `${timezoneFontSize}px`;
            this._dateElm.style.fontSize = `${dateFontSize}px`;
            this._clockElm.style.fontSize = `${clockFontSize}px`;
        }
    }
}

export default WidgetFace;