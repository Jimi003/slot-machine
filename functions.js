var reel = [
    "icons/WILD.png",
    "icons/Royal_9.png",
    "icons/Royal_10.png",
    "icons/Royal_J.png",
    "icons/Royal_Q.png",
    "icons/Royal_K.png",
    "icons/Royal_A.png",
    "icons/Scatter.png"
];
var reelNew;

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function initReels(reel) {
    for (j = 1; j < 4; j++) {
        shuffleArray(reel)
        reelNew = reel;
        reelNew.push(reelNew[0]);
        reelNew.push(reelNew[1]);
        reelNew.push(reelNew[2]);
        console.log(reelNew)
        for (i = 0; i < 11; i++) {
            document.getElementById("reel" + j).insertAdjacentHTML("beforeend", "<img src='" + reelNew[i] + "' />")
        }
        reelNew.pop()
        reelNew.pop()
        reelNew.pop()
        reelNew = reel;
    }
    console.log(reel)
}

// Initialize on page load.
initReels(reel);

// Initialize on REFRESH button click.
document.getElementById('refresh').addEventListener('click', function () {
    for (i = 1; i < 4; i++) {
        var node = document.getElementById("reel" + i)
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
    }
    initReels(reel);
});


var r1 = document.getElementById('reel1');
var r2 = document.getElementById('reel2');
var r3 = document.getElementById('reel3');

document.getElementById('spin').addEventListener('click', function () {
    r1.className += " reel1-spin";
    r2.className += " reel2-spin";
    r3.className += " reel3-spin";

});

document.getElementById('stop').addEventListener('click', function () {

    r1.className = "reel";
    r2.className = "reel";
    r3.className = "reel";

});
