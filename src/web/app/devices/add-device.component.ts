import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Device } from './device';
import { DeviceService } from './device.service';

@Component({
    selector: 'add-device',
    templateUrl: 'app/devices/add-device.component.html',
    styleUrls: ['app/devices/add-device.component.css']
})
export class AddDeviceComponent {
    device: Device;
    validation: String;
    
    constructor(
        private router: Router,
        private deviceService: DeviceService,
        private route: ActivatedRoute
    ) {
        this.device = { id: 0, name: '', uri: '' };
     }

    addDevice(device: Device) {
        if(device.name !== '' || device.uri !== '') {
            this.deviceService.addDevice(device)
                .subscribe(
                    device => {
                        console.log(device);
                        this.device = device;
                    }); 
            
            this.router.navigate(["/devices"]);
        } else {
            this.validation = "Name and Uri are required.";
        }
    }

    cancel() {
        this.router.navigate(["/devices"]);
    }
}