import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { OrderService } from './services/order.service';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './helpers/fake-backend';
import { AuthService } from './services/auth.service';

import { RouterModule } from '@angular/router';
import { GithubFollowersService } from './github-followers.service';
import { AppErrorHandler } from './services/app-error-handler';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponentComponent } from './one-component/one-component.component';
import { PanelComponent } from './panel/panel.component';
import { InputformatDirective } from './inputformat.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HttpJsonSampleComponent } from './http-json-sample/http-json-sample.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { RoutingExampleComponent } from './routing-example/routing-example.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';


@NgModule({
  declarations: [
    AppComponent,
    OneComponentComponent,
    PanelComponent,
    InputformatDirective,
    ZippyComponent,
    SampleFormComponent,
    ReactiveFormsComponent,
    FormArrayComponent,
    ChangePasswordComponent,
    HttpJsonSampleComponent,
    GithubFollowersComponent,
    RoutingExampleComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '',component: HomeComponent },
      { path: 'followers', component: GithubFollowersComponent },
      { path: 'profile/:username', component: GithubProfileComponent },
      { path: 'posts', component: HttpJsonSampleComponent},
      { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'no-access', component: NoAccessComponent },
      { path: '**', component: NotFoundComponent}

    ])
  ],
  providers: [
    PostService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    OrderService,

    AuthService,
    AuthGuard,
    AdminAuthGuard,

    // For creating a mock back-end. You don't need these in a real app. 
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
