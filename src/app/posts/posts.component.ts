import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() title: String;
  @Input() content: String;
  @Input() loveIts: number;
  @Input() index: number;
  @Input() created_at: Date;
  constructor(private postService: PostService) { }

  ngOnInit() {

  }

  OnDontLove(){

    this.loveIts --;
    console.log(this.loveIts);
  }

  OnLove(){

    this.loveIts ++;
    console.log(this.loveIts);
  }

  onDelete(){
    this.postService.deletePost(this.index);
  }




}
