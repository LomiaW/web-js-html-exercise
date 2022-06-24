 // Demonstrate using a closure, and use an immediately executing function to hide
 // an `isLoading` variable (i.e., not global), which will keep track of whether
 // or not an image is being loaded, so we can ignore repeated requests.
 var loadCatPicture = (function() {
    var isLoading = false;

    // This is the function that will be bound to loadCatPicture in the end.
    return function(filter) {
        if(isLoading) {
            console.log('Skipping load, already in progress');
            return;
        }

        var img = document.getElementById('cat-picture');
           
        function finishedLoading() {
            isLoading = false;

            // Remove unneeded event handlers so `img` can be garbage collected.
            img.onload = null;
            img.onerror = null;
            img = null;
        }
        img.onload = finishedLoading;
        img.onerror = finishedLoading;

        // If the function is called with a filter argument, add that to URL
        var url = 'https://cataas.com/cat';

        // Add something unique (and meaningless) to the query string, so the browser
        // won't cache this URL, but always load it again
        url += '?nocache=' + Date.now();

        if (filter) {
            console.log('Using cat picture filter', filter);
            url += '&filter=' + filter
        }

        // Finally, set isLoading to true, and begin loading image
        isLoading = true;
        img.src = url;
    };
})();

var poemText = document.getElementById('poem-text');
poemText.onclick = function() {
    loadCatPicture();
};

window.onkeypress = function(event) {
    switch(event.key) { 
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
            break;
    }
};
