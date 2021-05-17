import Config from "./config.js";
import WorldClockError from "./error.js";

class TimezoneSearch {
    /**
     * Class responsible for managing timezone search component interaction with user.
     * @param {Menu} menu World Clock menu component.
     * @throws {WorldClockError} if any timezone search component is missing in the DOM.
     */
    constructor(menu) {
        this._menu = menu;
        this._searchElm = document.getElementById(Config.MenuSearchElmId);

        if (!this._searchElm) throw new WorldClockError("Search element does not exist.");

        this._searchElm.onkeyup = this._handleUserInput.bind(this);
    }

    /**
     * Allows to access World Clock menu component.
     * @public
     * @returns {Menu} World Clock menu component.
     */
    get menu() { return this._menu; }

    /**
     * Handles user input into the timezone search HTML component.
     * Takes user input and feeds to the TimezoneList component filter function.
     * @param {KeyboardEvent} e keyboard button click.
     * @private
     */
    _handleUserInput(e) {
        const userInput = e.target.value;
        this.menu.timezoneList.filterTimezonesByUserInput(userInput);
    }

    /**
     * Clear timezone search HTML component text.
     * @public
     */
    clearSearch() {
        this._searchElm.value = "";
        this._searchElm.dispatchEvent(new KeyboardEvent('keyup', { key: 'Backspace' }));
    }
}

export default TimezoneSearch;