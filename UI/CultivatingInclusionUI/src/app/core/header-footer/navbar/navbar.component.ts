import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
    
    navBarVisibility:boolean= true;
    constructor(location: Location) {
        this.navBarVisibility = (location.path() === "/candidate-feedback") ? false : true;
    }

    ngOnInit() {

    }

}
