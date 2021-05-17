class Demo {
    constructor() {
        this.worldClock = new WorldClock({
            container: "worldClockContainer",
            theme: WorldClock.Theme.Light,
            showDate: true,
            showSeconds: true
        });

        window.addEventListener("click", this.onClick.bind(this));
    }

    onClick(event) {
        if (event.target.dataset.act) {
            switch (event.target.dataset.act) {
                case "changeTheme":
                    this.worldClock.setTheme(event.target.value);
                    break;
                case "changeShowDate":
                    this.worldClock.setDateShow(event.target.value == 'true');
                    break;
                case "changeShowTimeSeconds":
                    this.worldClock.setTimeSecondsShow(event.target.value == 'true');
                    break;
            }
        }
    }
}

export default new Demo();