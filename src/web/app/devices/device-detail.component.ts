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
    editEnabled: Boolean;
    
    constructor(
        private router: Router,
        private deviceService: DeviceService,
        private route: ActivatedRoute
    ) {
        this.editEnabled = false;
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

    enableEdit() {
        this.editEnabled = true;
    }

    disableEdit() {
        this.editEnabled = false
    }

    cancel() {
        this.editEnabled = false;
    }

    remove() {
        this.deviceService.removeDevice(this.device)
            .then(ignore => this.back())
    }

    save() {
        this.deviceService.updateDevice(this.device)
            .then(ignore => this.disableEdit())
    }

    back() {
        this.router.navigate(['/devices']);
    }
}