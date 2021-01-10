import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';
import { ConfigComponent } from './config/config.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PublicComponent, ConfigComponent],
  imports: [CommonModule, PublicRoutingModule, SharedModule],
})
export class PublicModule {}
