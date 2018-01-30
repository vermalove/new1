import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PhotosComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
