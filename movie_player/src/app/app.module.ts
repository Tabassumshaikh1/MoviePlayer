import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayListComponent } from './component/play-list/play-list.component';
import { NavComponent } from './component/nav/nav.component';
import { AddvideoComponent } from './component/addvideo/addvideo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './safe.pipe';
import { SeperatevideoComponent } from './component/seperatevideo/seperatevideo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    PlayListComponent,
    NavComponent,
    AddvideoComponent,
    SafePipe,
    SeperatevideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-center',maxOpened:1 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
