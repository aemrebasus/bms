import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ConfigComponent } from './config/config.component';

@NgModule({
  declarations: [AdminComponent, ConfigComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
