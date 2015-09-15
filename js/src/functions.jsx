function clientSize () {
    var height = document.documentElement.clientHeight;
    var width = document.documentElement.offsetWidth;

    return [width, height];
}

function scrollToElem(elem) {
    var doc = document.documentElement;
    var topW = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

    var elemTarget = document.getElementById(elem);
    var topE = (elemTarget.offsetTop || elemTarget.scrollTop)  - (elemTarget.clientTop || 0);

    var distance = topE - topW;

    var duration = 600;

    var step = Math.abs(Math.round(distance / 10));
    var leap = (distance > 0) ? topW + Math.round(duration/step) : topW - Math.round(duration/step);

    var smoothies = function() {
        console.log(leap);
        window.scroll(0, leap);
        
        if(distance > 0) {
            if(leap >= topE) {
                clearInterval(interval);
            }

            leap += Math.abs(Math.round(duration/step));
        } else {
            if(leap <= topE) {
                clearInterval(interval);
            }
            leap -= Math.abs(Math.round(duration/step));
        }
        
    }

    var interval = setInterval(smoothies, Math.abs(Math.round(duration/step)));
    
}

module.exports = {clientSize, scrollToElem};