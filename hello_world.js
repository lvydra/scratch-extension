(function(ext) {
    var ext = this;

    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // Functions for block with type 'w' will get a callback function as the 
    // final argument. This should be called to indicate that the block can
    // stop waiting.
    ext.hello_world = function(callback) {
        wait = Math.random();
        console.log('Hello world');
        window.setTimeout(function() {
            callback();
        }, wait*10000);
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['w', 'Hello world', 'hello_world'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Hello world', descriptor, ext);
})({});
