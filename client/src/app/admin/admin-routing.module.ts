import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../shared/dashboard/dashboard.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { AdminComponent } from './admin.component';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { animation: 'DashboardPage' },
      },
      {
        path: 'config',
        component: ConfigComponent,
        data: { animation: 'ConfigPage' },
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { animation: 'DashboardPage' },
      },
      { path: '**', component: PageNotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
