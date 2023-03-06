document.addEventListener('DOMContentLoaded', function () {
    new HSSideNav('.js-navbar-vertical-aside').init();
    new HSStickyBlock('.js-sticky-block', {
        targetSelector: document.getElementById('header').classList.contains('navbar-fixed') ? '#header' : null
    });

    new bootstrap.ScrollSpy(document.body, {
        target: '#navbarSettingsCardWithNav',
        offset: 100
    });
});