import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() title: String;
  @Input() content: String;
  @Input() loveIts: number;
   lovegreen: number = 0;
   lovered: number = 0;
  @Input() created_at: Date;
  constructor() { }

  ngOnInit() {
  }

  OnDontLove(){
    this.lovered = this.lovered +1;
    this.loveIts = -1;
    console.log(this.lovered);
  }

  OnLove(){
    this.lovegreen = this.lovegreen +1;
    this.loveIts = +1;
    console.log(this.lovegreen);
  }

  getColor(){
    if (this.lovegreen > this.lovered) {
      return 'green';
    }else if (this.lovered > this.lovegreen) {
      return 'red';
    }
  }

}
