System.register(['@angular/core', '@angular/router', './device.service'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, device_service_1;
    var AddDeviceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (device_service_1_1) {
                device_service_1 = device_service_1_1;
            }],
        execute: function() {
            AddDeviceComponent = (function () {
                function AddDeviceComponent(router, deviceService, route) {
                    this.router = router;
                    this.deviceService = deviceService;
                    this.route = route;
                    this.device = { _id: 0, name: '', uri: '' };
                }
                AddDeviceComponent.prototype.addDevice = function (device) {
                    var _this = this;
                    if (device.name !== '' || device.uri !== '') {
                        this.deviceService.addDevice(device)
                            .then(function (device) {
                            _this.device = device;
                            _this.router.navigate(["/devices"]);
                        });
                    }
                    else {
                        this.validation = "Name and Uri are required.";
                    }
                };
                AddDeviceComponent.prototype.cancel = function () {
                    this.router.navigate(["/devices"]);
                };
                AddDeviceComponent = __decorate([
                    core_1.Component({
                        selector: 'add-device',
                        templateUrl: 'app/devices/add-device.component.html',
                        styleUrls: ['app/devices/add-device.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, device_service_1.DeviceService, router_2.ActivatedRoute])
                ], AddDeviceComponent);
                return AddDeviceComponent;
            }());
            exports_1("AddDeviceComponent", AddDeviceComponent);
        }
    }
});
//# sourceMappingURL=add-device.component.js.map