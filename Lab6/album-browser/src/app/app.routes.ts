import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { AlbumDetailComponent } from './components/album-detail/album-detail';
import { AlbumPhotos } from './components/album-photos/album-photos';
import { AlbumsComponent } from './components/albums/albums';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'albums/:id/photos', component: AlbumPhotos },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: '**', redirectTo: 'home' }
];