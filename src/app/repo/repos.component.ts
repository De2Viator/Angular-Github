import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SearchService } from "../source/app.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Repo } from '../models/repo';

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
    template:`
  

  <div>
    <ul>
     <li *ngFor="let repo of repos; index as i"   (click)="open(content)">
       {{repo.name}}
       <button (click)="selectRepo(repo, i)" (click)="likeRepo()">
       <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" id="star" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
       <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
       </svg> 
       </button>
     </li>
   </ul>
  </div>


    <ng-template #content let-modal>
  <div class="modal-header">
    <h4 class="modal-title" id="modal-basic-title">
    <ul *ngFor="let filtered of reposFiltered | keyvalue">
    <li *ngIf="filtered.key=='name'">{{filtered.value}}</li>
    </ul>
    </h4>
    <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <form>
      <div class="form-group">
        <ul *ngFor="let filtered of reposFiltered | keyvalue">
          <li *ngIf="filtered.key=='description'">{{filtered.value}}</li>
          <li *ngIf="filtered.key=='language'">{{filtered.value}}</li>
          <li *ngIf="filtered.key=='html'"> <a href = {{filtered.value}}> {{filtered.value}} </a> </li>
          <ul *ngFor="let filter of filtered  | keyvalue ">

          <li *ngIf="filter.value==true"> 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
          <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
             </svg> </li>

             <li *ngIf="filter.value==false">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
             <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
             </svg></li>
             
          </ul>

        </ul>
      </div>
    </form>
  </div>
</ng-template>
`,
    providers:[SearchService]
}) 

export class RepoComponent {
    
    login: string;
    repos:Repo[]= [];
    reposFiltered:Repo;
    constructor(
        private activatedRoute: ActivatedRoute,
        private http:SearchService,
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
}

likeRepo(){
  this.http.likeRepo(this.reposFiltered).subscribe(data=>{
    console.log(data);
  })
}

}


