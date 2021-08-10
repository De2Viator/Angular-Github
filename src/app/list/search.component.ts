import { Component, OnInit } from '@angular/core';
import { SearchService} from '../source/app.service';  

@Component({
    selector: 'search-comp',

    styles:[`#userTable { column-count:2; }
    a { text-decoration: none;
      color: black }`],
      
    template: `
    <h5> Searched User: </h5>
    
    <list-comp> Поиск </list-comp>

    <hr>
    <h5> All User: </h5>

    <div id="userTable">
    <ul *ngFor='let user of users'> 
    <li> 
    <a routerLink="/repos/{{user.login}}"> <img height="100px" src="{{user.avatar_url}}"/> </a>
    <a routerLink="/repos/{{user.login}}"> {{user.login}} </a>
    </li>
    </ul>
    </div>`,
    providers:[ SearchService ] })
export class SearchComponent implements OnInit {
    public users = [];
    
    constructor(private http: SearchService){ } 

    ngOnInit(){
      this.http.getUsers().subscribe(data => {
        this.users = data;
        console.log(data);
      })
    }
}