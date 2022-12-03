


function init() {

}

function toggleFlyout(ele) {
    if(ele.getAttribute("aria-expanded") == "true") {
        ele.setAttribute("aria-expanded", "false")
        document.getElementById("projects-flyout").style.display = 'none';
    }
    else {
        ele.setAttribute("aria-expanded", "true")
        document.getElementById("projects-flyout").style.display = 'block';
    }
}

function toggleFlyout2(ele) {
    if(ele.getAttribute("aria-expanded") == "true") {
        ele.setAttribute("aria-expanded", "false")
        document.getElementById("menu-flyout").style.display = 'none';
    }
    else {
        ele.setAttribute("aria-expanded", "true")
        document.getElementById("menu-flyout").style.display = 'block';
    }
}