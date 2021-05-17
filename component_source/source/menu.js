import Config from "./config.js";
import WorldClockError from "./error.js";
import TimezoneSearch from "./timezone-search.js";
import TimezoneList from "./timezone-list.js";


class Menu {
    /**
     * Class responsible for managing clock menu interaction with user.
     * @param {Clock} clock World Clock API.
     * @throws {WorldClockError} if any menu component is missing in the DOM.
     */
    constructor(clock) {
        this._clock = clock;
        this._menuOpenBtn = document.getElementById(Config.MenuOpenBtnId);
        this._menuCloseBtn = document.getElementById(Config.MenuCloseBtnId);
        this._menuElm = document.getElementById(Config.MenuElmId);
        this._isOpen = false;

        if (!this._menuOpenBtn) throw new WorldClockError("Menu open button does not exist.");
        if (!this._menuCloseBtn) throw new WorldClockError("Menu close button does not exist.");
        if (!this._menuElm) throw new WorldClockError("Menu does not exist.");

        this._menuOpenBtn.onclick = this.open.bind(this);
        this._menuCloseBtn.onclick = this.close.bind(this);

        this._timezoneSearch = new TimezoneSearch(this);
        this._timezoneList = new TimezoneList(this);

        this.close()
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
     * Returns timezones list component.
     * @public
     * @returns {TimezoneList} TimezoneList component.
     */
    get timezoneList() {
        return this._timezoneList;
    }

    /**
     * Returns timezones search component.
     * @public
     * @returns {TimezoneSearch} TimezoneSearch component.
     */
    get timezoneSearch() { return this._timezoneSearch; }

    /**
     * Allows to open world clock menu.
     * @public
     */
    open() {
        this._isOpen = true;
        this._menuElm.classList.remove(Config.CSS.Hidden);
    }

    /**
     * Allows to close world clock menu.
     * @public
     */
    close() {
        this._isOpen = false;
        this._menuElm.classList.add(Config.CSS.Hidden);
    }
}

export default Menu;