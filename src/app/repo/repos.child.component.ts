import { Component, Input, OnInit } from "@angular/core";
import { SearchService } from "../source/app.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Repo } from '../models/repo';

@Component({
    selector:'repo-info',
    template:`
    <div>
    <ul *ngFor="let repo of repos">
    <li    (click)="open(content)" >
    <p>{{repo.name}} </p>  
    <p> {{repo.description}} </p> 
    </li>
    </ul>
    </div>

    <ng-template #content let-modal>
  <div class="modal-header">
    <ul>
    <li (click)="open(content)">
    <h4 class="modal-title" id="modal-basic-title">.</h4>
    </li>
    </ul>
    <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <form>
      <div class="form-group">
        <label for="dateOfBirth">Date of birth</label>
      </div>
    </form>
  </div>
</ng-template>`,
    providers:[SearchService]
})
export class RepoChildComponent implements OnInit {
    @Input() userLogin : string;
    repos = [];
    closeResult: string = '';
    constructor (private http:SearchService, private modalService: NgbModal){ }

    //Загрузка репозиториев
    ngOnInit(){
        this.http.getRepo(this.userLogin).subscribe(data => {
            this.repos = data;
            console.log(data);
          })    
    }
    //Бутстрап
    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `""`;
        });
      } 
}