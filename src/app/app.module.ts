import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbActionsModule,
  NbIconModule,
  NbContextMenuModule,
  NbMenuModule,
  NbInputModule,
  NbButtonModule,
  NbWindowModule,
  NbCardModule,
  NbDatepickerModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FooterComponent } from './components/footer/footer.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PopupWindowComponent } from './components/popup-window/popup-window.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AllUsersComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    UserInfoComponent,
    PopupWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbIconModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NbInputModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NbButtonModule,
    FormsModule,
    NbWindowModule.forRoot(),
    NbCardModule,
    NbDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
