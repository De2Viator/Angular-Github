
import { Component } from "@angular/core";
import { SearchService } from '../source/app.service'
import { User } from "../models/user";

@Component({
  selector:'list-comp',
  styles:[`.userSearch { width:100%;}
    .invalid-bottom {border-top:solid red 2px; }
    .invalid-top{border-bottom:solid red 2px;}
    #userTable{ column-count:2}
     a { text-decoration: none;
         color: black }`],
  
  template:`
  <div *ngIf="users?.length == 0" class="invalid-top" [hidden]="searchBar.value==''">
  </div>

  <input type="text" class="userSearch" #searchBar [(ngModel)]="userSearch"  (ngModelChange)="searchUser()" /> 

  <div *ngIf="users?.length == 0" class="invalid-bottom" [hidden]="searchBar.value==''">
  </div>

  <div *ngIf="users?.length == 0" [hidden]="searchBar.value==''">
  <h6> Users Not Found </h6>
  </div>

  <div id="userTable">
  <ul>
  <li *ngFor="let user of users">
  <a routerLink="/repos/{{user?.name}}" ><img height="100px" src={{user?.avatar}}/></a>
  <a routerLink="/repos/{{user?.name}}">{{user?.name}}</a>
  </li>
  </ul>
  </div> 
  `,
  providers:[SearchService]
})
export class SearchComponent{
  userSearch: string = "";
  users:User[] = [];
  constructor (private http: SearchService) { }

//Search User
  searchUser(){
    this.http.searchUsers(this.userSearch).subscribe((data: User[]) => {
      this.users=data;
      console.log(data)});
    }
}