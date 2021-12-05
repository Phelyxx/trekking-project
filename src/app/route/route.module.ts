import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteListarComponent } from './route-listar/route-listar.component';
import { RouteDetailComponent } from './route-detail/route-detail.component';
import {ReviewModule} from '../review/review.module';
import {RouteRoutingModule} from './route-routing.module';


@NgModule({
    imports: [
        CommonModule,
        ReviewModule,
        RouteRoutingModule
    ],
  declarations: [RouteListarComponent, RouteDetailComponent],
  exports: [RouteListarComponent, RouteDetailComponent]
})
export class RouteModule {

}
