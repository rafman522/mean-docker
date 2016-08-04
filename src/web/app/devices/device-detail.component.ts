import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
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
    edit: Boolean;
    
    constructor(
        private router: Router,
        private deviceService: DeviceService,
        private route: ActivatedRoute
    ) {
        this.edit = false;
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.deviceService.getDevice(id)
                    .then(device => this.device = { _id: device._id, name: device.name, uri: device.uri });
            }
        )  
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    editDevice() {
        this.edit = true;
    }

    cancel() {
        this.edit = false;
    }

    save() {
        this.deviceService.updateDevice(this.device)
            .then(ignore => this.edit = false)
    }

    back() {
        this.router.navigate(['/devices']);
    }
}