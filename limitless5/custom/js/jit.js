const applyDynamicStyles = () => {
    const properties = {
        "fs"     : "font-size",
        "fw"     : "font-weight",
        "m"      : "margin",
        "mt"     : "margin-top",
        "mb"     : "margin-bottom",
        "ml"     : "margin-left",
        "mr"     : "margin-right",
        "p"      : "padding",
        "pt"     : "padding-top",
        "pb"     : "padding-bottom",
        "pl"     : "padding-left",
        "pr"     : "padding-right",
        "top"    : "top",
        "bottom" : "bottom",
        "right"  : "right",
        "left"   : "left",
        "w"      : "width",
        "h"      : "height",
        "minw"   : "min-width",
        "maxw"   : "max-width",
        "minh"   : "min-height",
        "maxh"   : "max-height",
        "bg"     : "background-color",
        "c"      : "color",
        "bd"     : "border",
        "bdr"    : "border-radius",
        "bs"     : "box-shadow",
        "d"      : "display",
        "o"      : "opacity",
        "z"      : "z-index",
        "gap"    : "gap",
        "jc"     : "justify-content",
        "ai"     : "align-items",
        "fwrap"  : "flex-wrap",
        "fd"     : "flex-direction",
        "ta"     : "text-align",
        "ls"     : "letter-spacing",
        "ws"     : "word-spacing",
        "lh"     : "line-height"
    };

    Object.keys(properties).forEach(prefix => {
        document.querySelectorAll(`[class*="${prefix}-<"]`).forEach(el => {
            let match = el.className.match(new RegExp(`${prefix}-<(.*?)>`));
            if (match) {
                el.style[properties[prefix]] = match[1];
            }
        });
    });
}
