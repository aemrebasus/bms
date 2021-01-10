import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';
import { ConfigComponent } from './config/config.component';

@NgModule({
  declarations: [PublicComponent, ConfigComponent],
  imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {}
