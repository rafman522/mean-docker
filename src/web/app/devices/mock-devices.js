System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DEVICES;
    return {
        setters:[],
        execute: function() {
            exports_1("DEVICES", DEVICES = [
                { _id: 1, uri: 'uri://device1', name: 'Device 1' },
                { _id: 2, uri: 'uri://device2', name: 'Device 2' },
                { _id: 3, uri: 'uri://device3', name: 'Device 3' },
            ]);
        }
    }
});
//# sourceMappingURL=mock-devices.js.map