import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http'

import { Device } from './device';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DeviceService {
    private devicesUrl = 'app/devices';

    constructor(private http: Http) {}

    getDevices(): Observable<Device[]> {
        return this.http.get(this.devicesUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    getDevice(id: number): Observable<Device> {
        return this.http.get(this.devicesUrl + "/" + id)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    addDevice(device: Device): Observable<Device> {
        let body = JSON.stringify(device);
        let headers = new Headers({ 'content-type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.devicesUrl, body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    updateDevice(device: Device) {
        let body = JSON.stringify(device);
        let headers = new Headers({ 'content-type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.devicesUrl + "/" + device.id, body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    removeDevice(device: Device) {
        return this.http.delete(this.devicesUrl + "/" + device.id)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    extractData(response: Response) {
        if(response.status === 204) { //No Content
            return { };
        }
        
        let body = response.json();
        return body.data || { };
    }

    handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}