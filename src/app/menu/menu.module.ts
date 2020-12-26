import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'meteo', loadChildren: '../meteo/meteo.module#MeteoPageModule' },
      {
        path: 'gallery',
        loadChildren: '../gallery/gallery.module#GalleryPageModule',
      },
      {
        path: 'locations',
        loadChildren: '../locations/locations.module#LocationsPageModule',
      },
      {
        path: 'new-location',
        loadChildren: () =>
          import('../new-location/new-location.module').then(
            m => m.NewLocationPageModule
          ),
      },
      {
        path: 'location-details',
        loadChildren: () =>
          import('../location-details/location-details.module').then(
            m => m.LocationDetailsPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MenuPage],
})
export class MenuPageModule {}
