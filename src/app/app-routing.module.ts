import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './product/user.component';
import { UserDetailComponent } from './product/user-detail/user-detail/user-detail.component';
import { HomePageComponent } from './homePage/home-page/home-page.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'user-detail/:id',
    component: UserDetailComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
