import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CrudComponent } from './crud/crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'about',
        component: AboutComponent,
        data: {
          breadcrumb: 'About'
        }
      }, {
        path: 'crud',
        component: CrudComponent,
        data: {
          breadcrumb: 'Crud'
        }
      }, {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          breadcrumb: 'Dashboard'
        }
      }, {
        path: 'gallery',
        data: {
          breadcrumb: 'Gallery'
        },
        children: [
          {
            path: '',
            component: GalleryComponent,
          }, {
            path: ':id',
            component: ImageGalleryComponent,
            data: {
              breadcrumb: 'Image'
            }
          }
        ] 
      }, {
        path: 'home',
        component: HomeComponent,
        data: {
          breadcrumb: 'Home'
        }
      }, {
        path: 'login',
        component: LoginComponent,
        data: {
          breadcrumb: 'Login'
        }
      }, {
        path: 'logout',
        component: LogoutComponent,
        data: {
          breadcrumb: 'Logout'
        }
      }, {
        path: 'profile',
        component: ProfileComponent,
        data: {
          breadcrumb: 'Profile'
        }
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
