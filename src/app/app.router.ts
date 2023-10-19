//import { ModuleWithProviders } from '@angular/core';
//import {RouterModule} from ‘@angular/core’;
import { Routes, RouterModule } from '@angular/router'; 
//module for implementing routing

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { GalleryComponent } from './gallery/gallery.component'; 
import { RegistrationComponent } from './registration/registration.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactusComponent } from './contactus/contactus.component';

//Create and export a variable called Router in the app.routing.ts, which would be a collection of all routes inside the Angular application.
// pathMatch is specifying a strict matching of path to reach the destination page.
// In the routes array, the path object is '' which means the path http://localhost:4200/ , we have not provided any destination 
  //  to this object, but we are redirecting this path to items path using redirectTo key.
export const router: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' }, //default page
    { path: 'home', component: HomeComponent},
    { path: 'nav', component: NavComponent },
    {path:'gallery',component:GalleryComponent},
    {path:'registration',component:RegistrationComponent},
    {path:'courses',component:CoursesComponent},
    {path:'contactus',component:ContactusComponent}

];
//RouterModule.forRoot is for creating routes for the entire application
//  pass the routes array in the RouterModule using RouterModule.forRoot(router)
export const routes = RouterModule.forRoot(router);
//CREATE THE app.router.ts inside the App folder

//export const routes: ModuleWithProviders = RouterModule.forRoot(router);
