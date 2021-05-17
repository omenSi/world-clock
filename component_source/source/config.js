class Config {
    // Menu
    static MenuOpenBtnId = "_worldClockMenuOpen";
    static MenuCloseBtnId = "_worldClockMenuClose";
    static MenuElmId = "_worldClockMenu";
    static MenuSearchElmId = "_worldClockTimezoneSearch";

    // List 
    static TimezoneListElmId = "_worldClockTimezoneList";
    static TimezoneListObjectTypes = {
        Group: "group",
        Region: "region",
        City: "city"
    };

    // Widget Face
    static TimeElmId = "_worldClockCurrentTime";
    static DateElmId = "_worldClockCurrentDate";
    static TimezoneElmId = "_worldClockCurrentTimezone";

    // Storage
    static StorageKey = "_worldClockTZ";

    // Dependancies
    static MomentPath = "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js";
    static MomentTimezonePath = "https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.33/moment-timezone-with-data-10-year-range.min.js";
    static CSSFilePath = "style.css";

    // Other
    static CSS = {
        Hidden: "_world-clock-hidden",
        Selectable: "_world-clock-selectable",
        WidgetWrapper: "_world-clock-wrapper",
        TimezonePlaceholder: "_world-clock-current-timezone",
        TimeDateWrapper: "_world-clock-time-date",
        TimePlaceholder: "_world-clock-current-time",
        DatePlaceholder: "_world-clock-date",
        MenuOpenButton: "_world-clock-menu-toggle",
        MenuCloseButton: "_world-clock-menu-close",
        MenuOpenButtonImage: "_world-clock-menu-image",
        MenuWrapper: "_world-clock-menu",
        SearchWrapper: "_world-clock-menu-search-wrapper",
        SearchInput: "_world-clock-menu-search-input",
        TimezoneListWrapper: "_world-clock-menu-timezone-list-wrapper",
        TimezoneList: "_world-clock-menu-timezone-list",
        TimezoneListGroup: "_world-clock-menu-group",
        TimezoneListRegion: "_world-clock-menu-region",
        TimezoneListCity: "_world-clock-menu-city",
        LightTheme: "_world-clock-theme-light",
        DarkTheme: "_world-clock-theme-dark"
    }

    static WidgetStyleElmId = "_world-clock-style";

    static DefaultTimeFormat = "HH:mm:ss";
    static NoSecondsTimeFormat = "HH:mm";
    static DefaultDateFormat = "YYYY-MM-DD";
    static Themes = {
        Dark: "dark",
        Light: "light"
    };
    static ThemeToCSS = {
        [this.Themes.Dark]: this.CSS.DarkTheme,
        [this.Themes.Light]: this.CSS.LightTheme
    };
}

export default Config;