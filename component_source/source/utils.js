/**
 * Helper class to make type checks.
 */
class Datatype {
    static BOOLEAN = "boolean";
    static STRING = "string";
}

/**
 * Helper class to hold custom functions.
 */
class Utils {
    /**
     * Convert rem to pixel units.
     * @param {Number} rem number of rem to be converted to pixels. 
     * @returns {Number} calculated pixel number value.
     */
    static convertRemToPixels(rem) {
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }
}

/**
 * Helper class to hold required image xmls.
 */
class Images {
    static SettingsDark = "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 426.667 426.667' style='enable-background:new 0 0 426.667 426.667;' xml:space='preserve'><g><path d='M416.8,269.44l-45.013-35.307c0.853-6.827,1.493-13.76,1.493-20.8s-0.64-13.973-1.493-20.8l45.12-35.307 c4.053-3.2,5.227-8.96,2.56-13.653L376.8,69.653c-2.667-4.587-8.213-6.507-13.013-4.587l-53.12,21.44 c-10.987-8.427-23.04-15.573-36.053-21.013l-8-56.533C265.653,3.947,261.28,0,255.947,0h-85.333c-5.333,0-9.707,3.947-10.56,8.96 l-8,56.533c-13.013,5.44-25.067,12.48-36.053,21.013l-53.12-21.44c-4.8-1.813-10.347,0-13.013,4.587L7.2,143.573 c-2.667,4.587-1.493,10.347,2.56,13.653l45.013,35.307c-0.853,6.827-1.493,13.76-1.493,20.8s0.64,13.973,1.493,20.8L9.76,269.44 c-4.053,3.2-5.227,8.96-2.56,13.653l42.667,73.92c2.667,4.587,8.213,6.507,13.013,4.587L116,340.16 c10.987,8.427,23.04,15.573,36.053,21.013l8,56.533c0.853,5.013,5.227,8.96,10.56,8.96h85.333c5.333,0,9.707-3.947,10.56-8.96 l8-56.533c13.013-5.44,25.067-12.48,36.053-21.013l53.12,21.44c4.8,1.813,10.347,0,13.013-4.587l42.667-73.92 C422.027,278.507,420.853,272.747,416.8,269.44z M213.28,288c-41.28,0-74.667-33.387-74.667-74.667S172,138.667,213.28,138.667 s74.667,33.387,74.667,74.667S254.56,288,213.28,288z'/></g></svg>";
    static SettingsLight = "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 426.667 426.667' style='enable-background:new 0 0 426.667 426.667;' xml:space='preserve'><g><path fill='%23EEE' d='M416.8,269.44l-45.013-35.307c0.853-6.827,1.493-13.76,1.493-20.8s-0.64-13.973-1.493-20.8l45.12-35.307 c4.053-3.2,5.227-8.96,2.56-13.653L376.8,69.653c-2.667-4.587-8.213-6.507-13.013-4.587l-53.12,21.44 c-10.987-8.427-23.04-15.573-36.053-21.013l-8-56.533C265.653,3.947,261.28,0,255.947,0h-85.333c-5.333,0-9.707,3.947-10.56,8.96 l-8,56.533c-13.013,5.44-25.067,12.48-36.053,21.013l-53.12-21.44c-4.8-1.813-10.347,0-13.013,4.587L7.2,143.573 c-2.667,4.587-1.493,10.347,2.56,13.653l45.013,35.307c-0.853,6.827-1.493,13.76-1.493,20.8s0.64,13.973,1.493,20.8L9.76,269.44 c-4.053,3.2-5.227,8.96-2.56,13.653l42.667,73.92c2.667,4.587,8.213,6.507,13.013,4.587L116,340.16 c10.987,8.427,23.04,15.573,36.053,21.013l8,56.533c0.853,5.013,5.227,8.96,10.56,8.96h85.333c5.333,0,9.707-3.947,10.56-8.96 l8-56.533c13.013-5.44,25.067-12.48,36.053-21.013l53.12,21.44c4.8,1.813,10.347,0,13.013-4.587l42.667-73.92 C422.027,278.507,420.853,272.747,416.8,269.44z M213.28,288c-41.28,0-74.667-33.387-74.667-74.667S172,138.667,213.28,138.667 s74.667,33.387,74.667,74.667S254.56,288,213.28,288z'/></g></svg>";
}

export { Datatype, Utils, Images };