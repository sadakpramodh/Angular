import { RouterModule } from '@angular/router';
import { GithubFollowersService } from './github-followers.service';
import { AppErrorHandler } from './services/app-error-handler';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


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
    NavbarComponent
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
      { path: '**', component: NotFoundComponent}

    ])
  ],
  providers: [
    PostService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
