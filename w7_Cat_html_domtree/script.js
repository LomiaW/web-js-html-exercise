console.log('cats!');

// function loadCatPicture() {
//     var img = document.getElementById('cat-picture');
//     img.src = 'https://cataas.com/cat';
// }

// window.onload = function() {
//     loadCatPicture();

//     // Call the loadCatPicture function again in 5000ms
//     //setTimeout(loadCatPicture, 5 * 1000 /* 5s = 5000ms */);

//     // Call the loadCatPicture function every 15000ms
//     //setInterval(loadCatPicture, 15 * 1000 /* 15s = 15000ms */);

//     // Call the loadCatPicture function when the user clicks in the window
//     //window.onclick = loadCatPicture;
// };

// var poemText = document.getElementById('poem-text');
// poemText.onclick = loadCatPicture;

// function loadCatPicture() {
//     var img = document.getElementById('cat-picture');
//     img.src = 'https://cataas.com/cat';
// }

// var poemText = document.getElementById('poem-text');
// poemText.onclick = loadCatPicture;

// window.onkeypress = function(event) {
//     var keyName = event.key;
//     console.log('Key Press event', keyName);
//     loadCatPicture();
// };

// window.onkeypress = function(event) {
//     var keyName = event.key;
//     console.log('Key Press event', keyName);

//     switch(keyName) { 
//         case 'b':
//         case 'm':
//         case 's':
//         case 'n':
//         case 'p':
//         case 'x':
//             loadCatPicture();
//             break;
//         default:
//             console.log('Ignoring key press event');
//     }
// };

function loadCatPicture(filter) {
    var url = 'https://cataas.com/cat';
    var img = document.getElementById('cat-picture');

    // If the function is called with a filter argument, add that to URL
    if (filter) {
        console.log('Using cat picture filter', filter);
        url += '?filter=' + filter
    }

    img.src = url;
}

var poemText = document.getElementById('poem-text');
poemText.onclick = function() {
    loadCatPicture();
};

window.onkeypress = function(event) {
    var keyName = event.key;
    console.log('Key Press event', keyName);

    switch(keyName) { 
        case 'b':
            return loadCatPicture('blur');
        case 'm':
            return loadCatPicture('mono');
        case 's':
            return loadCatPicture('sepia');
        case 'n':
            return loadCatPicture('negative');
        case 'p':
            return loadCatPicture('paint');
        case 'x':
            return loadCatPicture('pixel');
        default:
            console.log('Ignoring key press event');
    }
};