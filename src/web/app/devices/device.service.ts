import { Injectable } from '@angular/core';

import { Device } from './device';
import { DEVICES } from './mock-devices';

@Injectable()
export class DeviceService {
    getDevices() {
        return Promise.resolve(DEVICES);
    }

    getDevice(id: number) {
        return Promise.resolve(DEVICES).then(
            devices => devices.filter(device => device._id === id)[0]
        );
    }
}