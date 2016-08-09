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
    var DeviceDetailComponent;
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
            DeviceDetailComponent = (function () {
                function DeviceDetailComponent(router, deviceService, route) {
                    this.router = router;
                    this.deviceService = deviceService;
                    this.route = route;
                    this.editEnabled = false;
                }
                DeviceDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.route.params.subscribe(function (params) {
                        var id = +params['id'];
                        _this.getDevice(id);
                    });
                };
                DeviceDetailComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                DeviceDetailComponent.prototype.getDevice = function (id) {
                    var _this = this;
                    this.deviceService.getDevice(id)
                        .subscribe(function (device) { return _this.device = device; });
                };
                DeviceDetailComponent.prototype.enableEdit = function () {
                    this.editEnabled = true;
                };
                DeviceDetailComponent.prototype.disableEdit = function () {
                    this.editEnabled = false;
                };
                DeviceDetailComponent.prototype.cancel = function () {
                    this.editEnabled = false;
                };
                DeviceDetailComponent.prototype.remove = function () {
                    var _this = this;
                    this.deviceService.removeDevice(this.device)
                        .subscribe(function (ignore) { return _this.back(); });
                };
                DeviceDetailComponent.prototype.save = function () {
                    var _this = this;
                    var id = this.device.id;
                    this.deviceService.updateDevice(this.device)
                        .subscribe(function (device) {
                        _this.getDevice(id);
                        _this.disableEdit();
                    });
                };
                DeviceDetailComponent.prototype.back = function () {
                    this.router.navigate(['/devices']);
                };
                DeviceDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'device-detail',
                        templateUrl: 'app/devices/device-detail.component.html',
                        styleUrls: ['app/devices/device-detail.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, device_service_1.DeviceService, router_2.ActivatedRoute])
                ], DeviceDetailComponent);
                return DeviceDetailComponent;
            }());
            exports_1("DeviceDetailComponent", DeviceDetailComponent);
        }
    }
});
//# sourceMappingURL=device-detail.component.js.map