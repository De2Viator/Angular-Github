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
      
    templateUrl:`../html/list.component.html` ,
    
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