import { Component, OnInit } from '@angular/core';

import { Device } from './device';
import { DeviceService } from './device.service';

@Component({
    selector: 'registered-devices',
    templateUrl: 'app/devices/devices.component.html',
    styleUrls: ['app/devices/devices.component.css']
})
export class DevicesComponent implements OnInit {
    devices: Device[];
    selectedDevice: Device;

    constructor(
        private deviceService: DeviceService) { }

    getDevices() {
        this.deviceService.getDevices().then(devices => this.devices = devices);
    }

    ngOnInit() {
        this.getDevices();
    }
}