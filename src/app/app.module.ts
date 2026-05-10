import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostCardComponent } from './shared/post/post.component';
import { PostDashboardComponent } from './shared/post-dashboard/post-dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MobileComponent } from './shared/mobile/mobile.component';
import { MobileDashboardComponent } from './shared/mobile-dashboard/mobile-dashboard.component';
import { MovieComponent } from './shared/movie/movie.component';
import { MovieDashboardComponent } from './shared/movie-dashboard/movie-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
     PostCardComponent,
     PostDashboardComponent,
     MobileComponent,
     MobileDashboardComponent,
     MovieComponent,
     MovieDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
