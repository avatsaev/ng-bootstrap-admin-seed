import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { HeaderComponent, SidebarComponent } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        ViewsRoutingModule,
        TranslateModule
    ],
    declarations: [
        ViewsComponent,
        HeaderComponent,
        SidebarComponent,

    ]
})
export class ViewsModule { }
