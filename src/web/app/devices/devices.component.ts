import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Device } from './device';
import { DeviceService } from './device.service';

@Component({
    selector: 'registered-devices',
    templateUrl: 'app/devices/devices.component.html',
    styleUrls: ['app/devices/devices.component.css']
})
export class DevicesComponent implements OnInit {
    devices: Device[];

    constructor(
        private router: Router,
        private deviceService: DeviceService) { }

    getDevices() {
        this.deviceService.getDevices()
            .then(devices => this.devices = devices);
    }

    ngOnInit() {
        this.getDevices();
    }

    gotoDetail(device: Device) {
        this.router.navigate(['/detail', device._id]);
    }

    gotoAddNewDevice() {
        this.router.navigate(['/add']);
    }
}