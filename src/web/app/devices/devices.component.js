System.register(['@angular/core', './device.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, device_service_1;
    var DevicesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (device_service_1_1) {
                device_service_1 = device_service_1_1;
            }],
        execute: function() {
            DevicesComponent = (function () {
                function DevicesComponent(deviceService) {
                    this.deviceService = deviceService;
                }
                DevicesComponent.prototype.getDevices = function () {
                    var _this = this;
                    this.deviceService.getDevices().then(function (devices) { return _this.devices = devices; });
                };
                DevicesComponent.prototype.ngOnInit = function () {
                    this.getDevices();
                };
                DevicesComponent = __decorate([
                    core_1.Component({
                        selector: 'registered-devices',
                        templateUrl: 'app/devices/devices.component.html',
                        styleUrls: ['app/devices/devices.component.css']
                    }), 
                    __metadata('design:paramtypes', [device_service_1.DeviceService])
                ], DevicesComponent);
                return DevicesComponent;
            }());
            exports_1("DevicesComponent", DevicesComponent);
        }
    }
});
//# sourceMappingURL=devices.component.js.map