import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RepoChildComponent } from'../repo/repos.child.component';

@Component({
    selector:'repo-comp',
    template:`<repo-info [userLogin]="login">  </repo-info>`

}) 

export class RepoComponent {
    login: string;
    constructor(activatedRoute: ActivatedRoute){
        this.login=activatedRoute.snapshot.params['username']
    }
}