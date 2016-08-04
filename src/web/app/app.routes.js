System.register(['@angular/router', './devices/devices.component', './devices/device-detail.component', './devices/add-device.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, devices_component_1, device_detail_component_1, add_device_component_1;
    var routes, appRouterProviders;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (devices_component_1_1) {
                devices_component_1 = devices_component_1_1;
            },
            function (device_detail_component_1_1) {
                device_detail_component_1 = device_detail_component_1_1;
            },
            function (add_device_component_1_1) {
                add_device_component_1 = add_device_component_1_1;
            }],
        execute: function() {
            routes = [
                {
                    path: '',
                    redirectTo: '/devices',
                    pathMatch: 'full'
                },
                {
                    path: 'detail/:id',
                    component: device_detail_component_1.DeviceDetailComponent
                },
                {
                    path: 'devices',
                    component: devices_component_1.DevicesComponent
                },
                {
                    path: 'add',
                    component: add_device_component_1.AddDeviceComponent
                }
            ];
            exports_1("appRouterProviders", appRouterProviders = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map