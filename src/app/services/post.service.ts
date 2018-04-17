import {Subject} from "rxjs/Subject";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Post} from "../models/post.model";

@Injectable()
export class PostService {

  postSubject = new Subject<any[]>();


  private posts: Post[];

  constructor(private  httpClient: HttpClient) {
  }
  emitSubject() {
    this.postSubject.next(this.posts);
  }

 addPost(title: string , content: string) {
    const PostObject = {
      id: 0,
      title: '',
      content: '',
      loveIts: 0,
      created_at : new Date()
    }
    PostObject.title = title;
    PostObject.content = content;
    PostObject.id = this.posts[(this.posts.length - 1)].id + 1;
    PostObject.loveIts = 0;
    PostObject.created_at = new Date();
    this.posts.push(PostObject);
    this.emitSubject();
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
    this.emitSubject();
  }

  addposttoServer() {
    this.httpClient.put('https://ng-projet-demo.firebaseio.com/posts.json', this.posts).subscribe(
      (resp) => {
        console.log(resp);
        console.log('Enregistrement effectué');
      }, (error) => {
        console.log('une erreur est survenu' + error);
      }
    );
  }
  getPostFromServer() {
    this.httpClient.get<Post[]>('https://ng-projet-demo.firebaseio.com/posts.json').subscribe(
      (response) => {
        console.log(response);
        this.posts = response;
        this.emitSubject();
      }
    );
  }


}
