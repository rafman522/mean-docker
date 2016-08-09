export class DeviceData {
    createDb() {
        let devices = [
            { id: 1, uri: 'uri://device1', name: 'Device 1' },
            { id: 2, uri: 'uri://device2', name: 'Device 2' },
            { id: 3, uri: 'uri://device3', name: 'Device 3' },
        ];
        return {devices};
    }
}