import { Injectable } from '@angular/core';

@Injectable()
export class NavBarService {

    private showNavBar: boolean = false;
    constructor() {

    }
    setNavBarVisibility(show: boolean) {
        this.showNavBar = show;
    }
    getNavBarVisibility() {
        return this.showNavBar;
    }
}
