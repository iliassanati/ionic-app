import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contact={
    name:'INPT Rabat',
    email: 'iliassanati@gmail.com',
    phone: '+212 6 49 13 02 66',
    logo: 'assets/images/logo.png',
    location: 'assets/images/loc.png'

  }

  constructor() {}

}
