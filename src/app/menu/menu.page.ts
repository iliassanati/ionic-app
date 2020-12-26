import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public menus = [
    { title: 'Home', url: '/menu/home', icon: 'home' },
    { title: 'Meteo', url: '/menu/meteo', icon: 'cloud-circle-outline' },
    { title: 'Gallery', url: '/menu/gallery', icon: 'image-outline' },
    { title: 'Locations', url: '/menu/locations', icon: 'locate-outline' },
    { title: 'Logout', url: 'logout', icon: 'log-out' },
  ];

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {}

  onMenuAction(m) {
    if (m.url == 'logout') {
      this.authService.logout();
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl(m.url);
    }
  }
}
