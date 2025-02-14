class Main {
    constructor() {
        this.init();
        this.layoutTheme();
    }

    layoutTheme() {
        this.docsTheme = document.getElementById("btncheck1");
        this.darkIcon = 'ph-moon';
        this.lightIcon = 'ph-sun';

        if (this.docsTheme) {
            this.initTheme();
            this.docsTheme.addEventListener("change", () => {
                this.resetTheme();
                setTimeout(() => {
                    document.documentElement.classList.remove('no-transitions');
                }, 100);
            });
        }
    }

    initTheme() {
        const darkThemeSelected = localStorage.getItem("docsTheme") === "dark";
        this.docsTheme.checked = darkThemeSelected;
        if (darkThemeSelected) {
            this.docsTheme.nextElementSibling.classList.replace(this.darkIcon, this.lightIcon);
        }
    }

    resetTheme() {
        document.documentElement.classList.add('no-transitions');
        if (this.docsTheme.checked) {
            document.documentElement.setAttribute("data-color-theme", "dark");
            localStorage.setItem("docsTheme", "dark");
            this.docsTheme.nextElementSibling.classList.replace(this.darkIcon, this.lightIcon);

        } else {
            document.documentElement.removeAttribute("data-color-theme");
            localStorage.removeItem("docsTheme");
            this.docsTheme.nextElementSibling.classList.replace(this.lightIcon, this.darkIcon);
            
        }
    }

    init() {
        if (localStorage.getItem('docsTheme') === 'dark') {
            document.documentElement.setAttribute('data-color-theme', 'dark');
        }
    }
}

export default Main;