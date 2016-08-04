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

    addDevice(device: Device) {
        return Promise.resolve(DEVICES).then(
            devices => {
                device._id = devices[devices.length-1]._id + 1;
                devices.push(device);
                return device;
            });
    }

    updateDevice(device: Device) {
        return Promise.resolve(DEVICES).then(
            devices => {
                var temp = devices.filter(device => device._id === device._id)[0]
                temp.name = device.name;
                temp.uri = device.uri;
            });
    }
}