System.register(['@angular/core', '@angular/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var DeviceService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            DeviceService = (function () {
                function DeviceService(http) {
                    this.http = http;
                    this.devicesUrl = DEVICE_API_URL + "api/device";
                }
                DeviceService.prototype.getDevices = function () {
                    return this.http.get(this.devicesUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                DeviceService.prototype.getDevice = function (id) {
                    return this.http.get(this.devicesUrl + "/" + id)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                DeviceService.prototype.addDevice = function (device) {
                    return this.http.post(this.devicesUrl, device)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                DeviceService.prototype.updateDevice = function (device) {
                    return this.http.put(this.devicesUrl + "/" + device.id, device)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                DeviceService.prototype.removeDevice = function (device) {
                    return this.http.delete(this.devicesUrl + "/" + device.id)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                DeviceService.prototype.extractData = function (response) {
                    if (response.status === 204) {
                        return {};
                    }
                    console.log(response.text());
                    var body = response.json();
                    return body || {};
                };
                DeviceService.prototype.handleError = function (error) {
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                DeviceService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DeviceService);
                return DeviceService;
            }());
            exports_1("DeviceService", DeviceService);
        }
    }
});
//# sourceMappingURL=device.service.js.map