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
                this.getDevice(id);
            }
        );
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getDevice(id: number) {
        this.deviceService.getDevice(id)
            .subscribe(
            device => this.device = device);
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
            .subscribe(ignore => this.back());
    }

    save() {
        let id = this.device.id;
        this.deviceService.updateDevice(this.device)
            .subscribe(device => {
                this.getDevice(id);
                this.disableEdit();
            });
    }

    back() {
        this.router.navigate(['/devices']);
    }
}