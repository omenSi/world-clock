import { Images } from "./utils.js";

/**
 * Widget CSS code, which is added to the document on creation.
 */
export const CSS = `
._world-clock-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

._world-clock-wrapper._world-clock-theme-light {
    background: rgb(240, 240, 240);
    color: #191818;
}

._world-clock-wrapper._world-clock-theme-dark {
    background: #191818;
    color: #EEE;
}

._world-clock-wrapper._world-clock-theme-light ._world-clock-menu-image {
    background-image: url("data:image/svg+xml;utf8,${Images.SettingsDark}");
}

._world-clock-wrapper._world-clock-theme-dark ._world-clock-menu-image {
    background-image: url("data:image/svg+xml;utf8,${Images.SettingsLight}");
}

._world-clock-wrapper._world-clock-theme-dark ._world-clock-menu {
    background: #191818;
    color: #EEE;
}

._world-clock-wrapper._world-clock-theme-light ._world-clock-menu {
    background: rgb(240, 240, 240);
    color: #191818;
}

._world-clock-wrapper._world-clock-theme-dark ._world-clock-menu-search-input {
    background: #191818;
    color: #EEE;
}

._world-clock-wrapper._world-clock-theme-light ._world-clock-menu-search-input {
    background: rgb(240, 240, 240);
    color: #191818;
}

._world-clock-time-date {
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    padding: 1rem;
}

._world-clock-current-timezone {
    white-space: nowrap;
    display: inline-block;
}

._world-clock-current-time {
    white-space: nowrap;
}

._world-clock-date {
    white-space: nowrap;
}

._world-clock-menu-toggle {
    margin-left: .2rem;
    width: .8rem;
    height: .8rem;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
}

._world-clock-menu-image {
    background-image: url("data:image/svg+xml;utf8,${Images.SettingsLight}");
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    width: 100%;
    height: 100%;
}

._world-clock-menu-image:hover,
._world-clock-menu-image:focus {
    animation: _world-clock-menu-rotation 5s infinite linear;
}

._world-clock-hidden {
    display: none;
    visibility: hidden;
}

._world-clock-menu {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #eee;
    overflow: hidden;
}

._world-clock-menu-search-wrapper {
    height: 2rem;
    width: 100%;
}

._world-clock-menu-close {
    float: right;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 0 .5rem;
    width: 1rem;
    line-height: 1.4;
    height: 100%;
}

._world-clock-menu-close:hover,
._world-clock-menu-close:focus {
    color: red;
}

._world-clock-menu-search-input {
    border: none;
    background: #eee;
    padding: .5rem;
    outline: none;
    width: calc(100% - 3rem);
}

._world-clock-menu-search-wrapper:focus-within::after {
    transform: scaleX(1);
}

._world-clock-menu-search-wrapper:after {
    display:block;
    content: '';
    border-bottom: 2px solid rgb(255, 0, 128);
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
  }

._world-clock-menu-timezone-list-wrapper {
    width: 100%;
    height: calc(100% - 2rem);
}

._world-clock-menu-timezone-list {
    list-style: none;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-y: auto;
    margin-top: 2px;
}

._world-clock-menu-group {
    font-weight: bold;
    margin: 0.5rem;
}

._world-clock-menu-region {
    margin: 0.25rem 1.5rem;
}

._world-clock-menu-city {
    margin: 0.25rem 2.5rem;
}

._world-clock-selectable {
    cursor: pointer;
}

._world-clock-selectable:hover {
    text-decoration: underline;
}


@keyframes _world-clock-menu-rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;