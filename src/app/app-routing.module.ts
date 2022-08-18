import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TalkWithApiHeartbeatComponent } from './pages/talk-with-api-heartbeat/talk-with-api-heartbeat.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/talk-with-api', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'talk-with-api', component: TalkWithApiHeartbeatComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: AllUsersComponent },
  { path: 'user-info', component: UserInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
