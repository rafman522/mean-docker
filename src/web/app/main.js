System.register(['@angular/http', 'angular2-in-memory-web-api', './devices/device-data', '@angular/platform-browser-dynamic', './app.component', './app.routes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, angular2_in_memory_web_api_1, device_data_1, platform_browser_dynamic_1, http_2, app_component_1, app_routes_1;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (angular2_in_memory_web_api_1_1) {
                angular2_in_memory_web_api_1 = angular2_in_memory_web_api_1_1;
            },
            function (device_data_1_1) {
                device_data_1 = device_data_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
                app_routes_1.appRouterProviders,
                http_2.HTTP_PROVIDERS,
                { provide: http_1.XHRBackend, useClass: angular2_in_memory_web_api_1.InMemoryBackendService },
                { provide: angular2_in_memory_web_api_1.SEED_DATA, useClass: device_data_1.DeviceData } // in-mem server data 
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map