import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { GooglePlacesDirective } from './shared/directives/places/google-places.directive';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/modules/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AuthService } from './shared/services/auth/auth.service';
import { AudioPlayerService } from './shared/services/audio-player/audio-player.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthComponent,
    HeaderComponent,
    FaqComponent,
    LoginComponent,
    GooglePlacesDirective,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDZyNdzl9Gc7QMi3zFZHv8xM766MPmPiQk'
    // })
  ],
  providers: [
    AuthService,
    AudioPlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
