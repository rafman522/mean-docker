import { Component } from '@angular/core';

import { DevicesComponent } from './devices/devices.component';

import { DeviceService } from './devices/device.service';

@Component({
    selector: 'device-app',
    templateUrl: './app/app.component.html',
    directives: [ DevicesComponent ],
    providers: [ DeviceService ]
})
export class AppComponent {
    title = "IoT Device Manager"
}