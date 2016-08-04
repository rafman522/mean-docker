import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DeviceService } from './devices/device.service';

@Component({
    selector: 'device-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ DeviceService ]
})
export class AppComponent {
    title = "IoT Device Manager"
}