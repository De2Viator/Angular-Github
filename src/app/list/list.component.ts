import { Component, OnInit } from '@angular/core';
import { SearchService} from '../source/app.service';  

@Component({
    selector: 'search-comp',

    styles:[`#userTable { column-count:2; }
    a { text-decoration: none;
      color: black }
      
      #deleteStar{
        cursor:pointer;
        color:red;
      }`],
      
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
    </div>
    
    <button (click)="loadRepos()">Favourite Repo </button>
    <div>
    <ul *ngFor='let likedRepo of likedRepos'>
    <li>
    {{likedRepo.name}}
    <svg xmlns="http://www.w3.org/2000/svg" id="deleteStar" (click)="deleteRepos(likedRepo.id)" width="16" height="16" fill="currentColor" class="bi bi-bookmark-x-fill" viewBox="0 0 16 16">
       <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM6.854 5.146a.5.5 0 1 0-.708.708L7.293 7 6.146 8.146a.5.5 0 1 0 .708.708L8 7.707l1.146 1.147a.5.5 0 1 0 .708-.708L8.707 7l1.147-1.146a.5.5 0 0 0-.708-.708L8 6.293 6.854 5.146z"/>
    </svg>
    </li>
    </ul>
    </div>`,
    
    providers:[ SearchService ] })
export class ListComponent implements OnInit {
    public users = [];
    isDeleted: boolean = false;
    public likedRepos = [];
    
    constructor(private http: SearchService){ } 

    ngOnInit(){
      this.http.getUsers().subscribe(data => {
        this.users = data;
        console.log(data);
      })
    }

    loadRepos(){
      this.http.loadRepo().subscribe(data =>{
        this.likedRepos = data;
        console.log(data);
      })
    }

    deleteRepos(id:number){
      this.http.deleteRepo(id).subscribe(data=>{
          console.log(data);
      })
  }
}