
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
  
  templateUrl:`../html/search.component.html`,
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