
import { Component, ElementRef, ViewChild } from "@angular/core";
import { ApiService } from "../api.service";
import { IUser } from "../models/user";

@Component({
  selector:'app-search',
  styleUrls:['search.component.scss'],
  templateUrl:'search.component.html'
})
export class SearchComponent{
  userSearch: string = "";
  users:IUser[] = [];
  @ViewChild('searchBar') search:ElementRef;
  constructor (private http: ApiService) { }

//Search User
  searchUser(){
    this.http.searchUsers(this.userSearch).subscribe(data => {
      this.users = data['items'];
    }, error => {
      this.users = [];
    })
  }
}