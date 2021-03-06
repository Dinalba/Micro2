import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';

const routes: Routes = [  
 {
   path:'',
   component: MoviePageComponent
  },
 {
   path:'movies',
   component: MoviePageComponent
 },{
  path:'login',
  component: LoginPageComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
