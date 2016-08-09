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
    errorMessage: string;

    constructor(
        private router: Router,
        private deviceService: DeviceService) { }

    getDevices() {
        this.errorMessage = null;
        this.deviceService.getDevices()
            .subscribe(
                devices => this.devices = devices,
                error => this.errorMessage = <any>error);
    }

    ngOnInit() {
        this.getDevices();
    }

    gotoDetail(device: Device) {
        this.router.navigate(['/detail', device.id]);
    }

    gotoAddNewDevice() {
        this.router.navigate(['/add']);
    }
}