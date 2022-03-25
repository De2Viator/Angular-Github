import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { IRepo } from '../models/repo';

@Component({
  selector: 'app-list',
  styleUrls:['list.component.scss'],
  templateUrl: 'list.component.html',
})
export class ListComponent implements OnInit {
  users = [];
  isDeleted: boolean = false;
  likedRepos = [];

  constructor(private http: ApiService) {}

  ngOnInit() {
    this.http.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  loadRepos() {
    this.http.loadRepo().subscribe((data) => {
      this.likedRepos = data;
    });
  }

  deleteRepos(id: number) {
    new Promise((resolve,reject)=> {
      this.http.deleteRepo(id).subscribe();
      resolve(true);
    }).then((data) => {
      this.loadRepos()
    })
  }
}
