import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts =[
    {
      title: 'Premier',
      content: 'Ma premiere Application avec Angular 2+, ça donnera quelque chose ?',
      loveIts: 0,
      created_at: new Date()},
    {
      title: 'Deuxieme',
      content: 'Ma premiere Application avec Angular 2+, ça donnera quelque chose ?',
      loveIts: 0,
      created_at: new Date()},
    {
      title: 'Troisieme',
      content: 'Ma premiere Application avec Angular 2+, ça donnera quelque chose ?',
      loveIts: 0,
      created_at: new Date()}
    ];
}
