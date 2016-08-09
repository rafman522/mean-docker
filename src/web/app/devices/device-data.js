System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DeviceData;
    return {
        setters:[],
        execute: function() {
            DeviceData = (function () {
                function DeviceData() {
                }
                DeviceData.prototype.createDb = function () {
                    var devices = [
                        { id: 1, uri: 'uri://device1', name: 'Device 1' },
                        { id: 2, uri: 'uri://device2', name: 'Device 2' },
                        { id: 3, uri: 'uri://device3', name: 'Device 3' },
                    ];
                    return { devices: devices };
                };
                return DeviceData;
            }());
            exports_1("DeviceData", DeviceData);
        }
    }
});
//# sourceMappingURL=device-data.js.map