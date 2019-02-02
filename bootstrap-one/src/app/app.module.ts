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
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    PostService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
