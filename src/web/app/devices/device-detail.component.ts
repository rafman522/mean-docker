import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Device } from './device';
import { DeviceService } from './device.service';

@Component({
    selector: 'device-detail',
    templateUrl: 'app/devices/device-detail.component.html',
    styleUrls: ['app/devices/device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit, OnDestroy {
    device: Device;
    sub: any;
    
    constructor(
        private deviceService: DeviceService,
        private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.deviceService.getDevice(id)
                    .then(device => this.device = device);
            }
        )  
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}