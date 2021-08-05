import { Component, Input, OnInit } from "@angular/core";
import { SearchService } from "../list/search.service";
import { Repo } from '../models/repo';

@Component({
    selector:'repo-info',
    template:`
    <div>
    <ul *ngFor="let repo of repos">
    <li> 
    <p>{{repo.name}} </p>  
    <p> {{repo.description}} </p> 
    </li>
    </ul>
    </div>
    `,
    providers:[SearchService]
})
export class RepoChildComponent implements OnInit {
    @Input() userLogin : string;
    repos = [];
    constructor (private http:SearchService){ }
    ngOnInit(){
        this.http.getRepo(this.userLogin).subscribe(data => {
            this.repos = data;
            console.log(data);
          })    
    }



    /* this.http.getRepo().subscribe((data: Repo[]) => {
            this.repos=data
            console.log(data)});
    */ 
}