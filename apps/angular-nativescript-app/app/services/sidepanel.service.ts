import { Injectable } from '@angular/core';
require( "nativescript-localstorage" );

@Injectable()
export class SidepanelService {
  isOpened: boolean;

  constructor() {
    const storageValue = localStorage.getItem('angular-isOpened');
    switch (storageValue) {
      case 'true':
        this.isOpened = true;
        break;
      case 'false':
        this.isOpened = false;
        break;
      default:
        this.isOpened = false
    }
  }

  togglePanel() {
    this.isOpened = !this.isOpened;
    localStorage.setItem('angular-isOpened', String(this.isOpened))
  }

}
