import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SearchService } from "../source/app.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Repo } from '../models/repo';
import { RepoService} from '../source/repo.service'

@Component({
    selector:'repo-comp',
    styles:[`#star{  
      color: yellow;
      cursor: pointer; }

      button {
        background-color: Transparent;
        background-repeat:no-repeat;
        border: none;
        cursor:pointer;
        overflow: hidden;
        outline:none;
    }`],
    templateUrl:`../html/repos.component.html`,
    providers:[RepoService]
}) 

export class RepoComponent {
    
    login: string;
    repos:Repo[]= [];
    reposFiltered:Repo;
    constructor(
        private activatedRoute: ActivatedRoute,
        private http:RepoService,
        private modalService: NgbModal,) {
        this.login=activatedRoute.snapshot.params['username']
    }

//Repo loader
    ngOnInit(){
        this.http.getRepo(this.login).subscribe(data => {
            this.repos = data;
            console.log(data);
          })    
    }
 //Bootstrap
    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
      } 


//Choosen Repo
selectRepo(data){
  this.reposFiltered = data;
  console.log(data);
}

likeRepo(){
  this.http.likeRepo(this.reposFiltered).subscribe(data=>{
    console.log(data);
  })
}

}


