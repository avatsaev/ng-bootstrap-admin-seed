import {Component, Input, OnInit} from '@angular/core';
import {Breadcrumb} from '../../../models/breadcrumb.model';


@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})



export class PageHeaderComponent implements OnInit {

    @Input() title: string;
    @Input() breadcrumbs: Breadcrumb[] = [];


    ngOnInit() {
        console.log(this.breadcrumbs)
    }
}
