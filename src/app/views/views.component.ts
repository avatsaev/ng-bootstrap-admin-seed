import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './views.component.html',
    styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/home']);
        }
    }

}
