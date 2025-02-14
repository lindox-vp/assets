class Main {
    constructor() {
        this.init();
        this.layoutTheme();
        this.truncateBreadcrumbActive();
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

    truncateBreadcrumbActive() {
        const breadcrumbItem = document.querySelector('.breadcrumb-item.active');
        if (!breadcrumbItem) return;

        const originalText = breadcrumbItem.getAttribute('data-original-text') || breadcrumbItem.textContent;

        if (window.innerWidth < 1024) { 
            const maxLength = 20;
            const truncatedText = originalText.length > maxLength
                ? originalText.substring(0, maxLength) + '...'
                : originalText;

            breadcrumbItem.textContent = truncatedText;
        } else {
            breadcrumbItem.textContent = originalText;
        }

        breadcrumbItem.setAttribute('data-original-text', originalText);
    }
    

    init() {
        if (localStorage.getItem('docsTheme') === 'dark') {
            document.documentElement.setAttribute('data-color-theme', 'dark');
        }
    }
}

export default Main;