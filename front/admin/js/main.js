document.addEventListener('DOMContentLoaded', function () {
    new HSHeader('#header').init()
    new HSGoTo('.js-go-to')

    const $figure = document.querySelector('.js-img-comp')

    if (window.pageYOffset) 
    {
        if ($figure) $figure.style.transform = `rotateY(${-18 + window.pageYOffset}deg) rotateX(${window.pageYOffset / 5}deg)`;
    }

    let y = -18 + window.pageYOffset,
        x = 55 - window.pageYOffset

    const figureTransformation = function () {
        if (-18 + window.pageYOffset / 5 > 0) 
        {
            y = 0
        }

        if (55 - window.pageYOffset / 3 < 0) 
        {
            x = 0
        }

        y = -18 + window.pageYOffset / 5 < 0 ? -18 + window.pageYOffset / 5 : y
        x = 55 - window.pageYOffset / 3 > 0 ? 55 - window.pageYOffset / 3 : x

        if ($figure) $figure.style.transform = 'rotateY(${y}deg) rotateX(${x}deg)';
    }

    figureTransformation()
    window.addEventListener('scroll', figureTransformation);
});

(function () {
    const $dropdownBtn = document.getElementById('selectThemeDropdown')
    const $variants = document.querySelectorAll(`[aria-labelledby="selectThemeDropdown"] [data-icon]`)

    const setActiveStyle = function () {
    $variants.forEach($item => {
        if ($item.getAttribute('data-value') === HSThemeAppearance.getOriginalAppearance()) {
        $dropdownBtn.innerHTML = `<i class="${$item.getAttribute('data-icon')}" />`
        return $item.classList.add('active')
        }

        $item.classList.remove('active')
    })
    }

    $variants.forEach(function ($item) {
    $item.addEventListener('click', function () {
        HSThemeAppearance.setAppearance($item.getAttribute('data-value'))
    })
    })

    setActiveStyle()

    window.addEventListener('on-hs-appearance-change', function () {
    setActiveStyle()
    })
})();
