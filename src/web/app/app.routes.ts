import { provideRouter, RouterConfig }  from '@angular/router';

import { DevicesComponent } from './devices/devices.component';
import { DeviceDetailComponent } from './devices/device-detail.component';

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
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];