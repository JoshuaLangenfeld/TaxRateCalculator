import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../core/services/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    message$: Observable<string> = this.dataService.getMessage();

    constructor(private dataService: DataService) { }

    ngOnInit() {
    }
}
