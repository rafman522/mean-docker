import { provideRouter, RouterConfig }  from '@angular/router';

import { DevicesComponent } from './devices/devices.component';
import { DeviceDetailComponent } from './devices/device-detail.component';
import { AddDeviceComponent } from './devices/add-device.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/devices',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: DeviceDetailComponent
  },
  {
    path: 'devices',
    component: DevicesComponent
  },
  {
    path: 'add',
    component: AddDeviceComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];