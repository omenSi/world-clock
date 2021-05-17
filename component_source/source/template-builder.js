import Config from "./config.js";

/**
 * Singleton class, which allows to build widget HTML code.
 */
class TemplateBuilder {
    /**
     * Builds timezone list group HTML element.
     * @param {String} groupName group name to display in the HTML.
     * @param {Boolean} selectable is group selectable as a timezone.

     * @returns {HTMLLIElement} timezone list group HTML element.
     */
    static buildTimezoneListGroup(groupName, selectable = false) {
        const li = document.createElement("li");
        li.innerText = groupName;
        li.classList.add(Config.CSS.TimezoneListGroup);
        if (selectable) li.classList.add(Config.CSS.Selectable);
        li.dataset.obj = Config.TimezoneListObjectTypes.Group;
        li.dataset.timezonePartName = groupName;
        return li;
    }

    /**
     * Builds timezone region city HTML element.
     * @param {String} regionName region name to display in the HTML.
     * @param {Boolean} selectable is region selectable as a timezone.
     * @public
     * @returns {HTMLLIElement} timezone region city HTML element.
     */
    static buildTimezoneListRegion(regionName, selectable = false) {
        const li = document.createElement("li");
        li.innerText = regionName;
        li.classList.add(Config.CSS.TimezoneListRegion);
        if (selectable) li.classList.add(Config.CSS.Selectable);
        li.dataset.obj = Config.TimezoneListObjectTypes.Region;
        li.dataset.timezonePartName = regionName;
        return li;
    }

    /**
     * Builds timezone list city HTML element.
     * @param {String} cityName city name to display in the HTML.
     * @param {Boolean} selectable is city selectable as a timezone.
     * @public
     * @returns {HTMLLIElement} timezone list city HTML element.
     */
    static buildTimezoneListCity(cityName, selectable = false) {
        const li = document.createElement("li");
        li.innerText = cityName;
        li.classList.add(Config.CSS.TimezoneListCity);
        if (selectable) li.classList.add(Config.CSS.Selectable);
        li.dataset.obj = Config.TimezoneListObjectTypes.City;
        li.dataset.timezonePartName = cityName;
        return li;
    }

    /**
     * Build widget wrapper HTML element.
     * @param {String} theme color theme of the widget. Valid entires - one of the ["light", "dark"]. 
     * @public
     * @returns {HTMLDivElement} widget wrapper HTML element.
     */
    static buildWidgetWrapper(theme = Config.Themes.Light) {
        const div = document.createElement("div");
        div.classList.add(Config.CSS.WidgetWrapper);
        if ([Config.Themes.Light, Config.Themes.Dark].includes(theme)) {
            div.classList.add(Config.ThemeToCSS[theme]);
        }
        return div;
    }

    /**
     * Builds timezone, date and time HTML elements.
     * Then returns all of them in a wrapper element.
     * @param {Boolean} showDate should date be shown on the widget face.
     * @public 
     * @returns {HTMLDivElement} timezone, date and time HTML elements in a wrapper HTML element.
     */
    static buildTimezoneTimeDatePlaceholders(showDate = true) {
        const wrap = document.createElement("div");
        const timezoneWrapper = document.createElement("div");
        const timezonePlaceholder = document.createElement("div");
        const timePlaceholder = document.createElement("div");
        const datePlaceholder = document.createElement("div");
        timezonePlaceholder.id = Config.TimezoneElmId;
        timePlaceholder.id = Config.TimeElmId;
        datePlaceholder.id = Config.DateElmId;
        wrap.classList.add(Config.CSS.TimeDateWrapper);
        timezonePlaceholder.classList.add(Config.CSS.TimezonePlaceholder);
        timePlaceholder.classList.add(Config.CSS.TimePlaceholder);
        datePlaceholder.classList.add(Config.CSS.DatePlaceholder);
        timezoneWrapper.appendChild(timezonePlaceholder);
        timezoneWrapper.appendChild(TemplateBuilder.buildMenuOpenButton());
        wrap.appendChild(timezoneWrapper);
        wrap.appendChild(timePlaceholder);
        wrap.appendChild(datePlaceholder);
        if (!showDate) datePlaceholder.classList.add(Config.CSS.Hidden);
        return wrap;
    }

    /**
     * Builds menu open button component HTML element.
     * @public
     * @returns {HTMLDivElement} menu open button component HTML element.
     */
    static buildMenuOpenButton() {
        const buttonWrap = document.createElement("div");
        const image = document.createElement("div");

        buttonWrap.id = Config.MenuOpenBtnId;
        buttonWrap.classList.add(Config.CSS.MenuOpenButton);
        image.classList.add(Config.CSS.MenuOpenButtonImage);
        buttonWrap.appendChild(image);

        return buttonWrap;
    }

    /**
     * Builds widget face component HTML element.
     * @param {Boolean} showDate should date be shown on the widget face. 
     * @public
     * @returns {HTMLDivElement} widget face component HTML element.
     */
    static buildWidgetFace(showDate = true) {
        return TemplateBuilder.buildTimezoneTimeDatePlaceholders(showDate);
    }

    /**
     * Builds menu component HTML element.
     * @public
     * @returns {HTMLDivElement} menu component HTML element.
     */
    static buildMenu() {
        const menu = document.createElement("div");
        menu.id = Config.MenuElmId;
        menu.classList.add(Config.CSS.MenuWrapper, Config.CSS.Hidden);

        menu.appendChild(TemplateBuilder.buildMenuSearch());
        menu.appendChild(TemplateBuilder.buildMenuTimezoneList());
        return menu;
    }

    /**
     * Builds menu search component HTML element.
     * @public
     * @returns {HTMLDivElement} menu search component HTML element.
     */
    static buildMenuSearch() {
        const searchWrap = document.createElement("div");
        const searchInput = document.createElement("input");
        searchWrap.classList.add(Config.CSS.SearchWrapper);
        searchInput.classList.add(Config.CSS.SearchInput)
        searchInput.type = "text";
        searchInput.placeholder = "Search for timezone...";
        searchInput.id = Config.MenuSearchElmId;

        searchWrap.appendChild(searchInput);
        searchWrap.appendChild(TemplateBuilder.buildMenuCloseButton());
        return searchWrap;
    }

    /**
     * Builds menu close button HTML element.
     * @public
     * @returns {HTMLSpanElement} menu close button HTML element.
     */
    static buildMenuCloseButton() {
        const button = document.createElement("span");
        button.id = Config.MenuCloseBtnId;
        button.classList.add(Config.CSS.MenuCloseButton);
        button.innerHTML = "&times;";
        return button;
    }

    /**
     * Builds menu list HTML element.
     * @public
     * @returns {HTMLDivElement} menu list HTML element.
     */
    static buildMenuTimezoneList() {
        const wrapper = document.createElement("div");
        const list = document.createElement("ul");
        wrapper.classList.add(Config.CSS.TimezoneListWrapper);
        list.classList.add(Config.CSS.TimezoneList);
        list.id = Config.TimezoneListElmId;
        wrapper.appendChild(list);
        return wrapper;
    }
}

export default TemplateBuilder;