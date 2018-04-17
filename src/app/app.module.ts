import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {PostService} from "./services/post.service";
import { NewPostComponent } from './new-post/new-post.component';
import { PostViewComponent } from './post-view/post-view.component';
import {HttpClientModule} from "@angular/common/http";

const appRoute: Routes = [
  {path: 'posts', component: PostViewComponent},
  {path: 'new', component: NewPostComponent},
  {path: '', component: PostViewComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NewPostComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
