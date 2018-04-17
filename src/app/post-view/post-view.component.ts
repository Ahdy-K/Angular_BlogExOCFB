import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from "../services/post.service";
import {Subscription} from "rxjs/Subscription";
import {Post} from "../models/post.model";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit, OnDestroy {

  posts: Post [];
  postSubscription: Subscription;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitSubject();
  }



  onSave() {
    this.postService.addposttoServer();
  }

  onFetch() {
    this.postService.getPostFromServer();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
