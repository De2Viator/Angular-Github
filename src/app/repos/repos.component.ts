import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { IRepo } from "../models/repo";
import { ApiService } from "../api.service";

@Component({
  selector: "repo-comp",
  styleUrls: ["repos.component.scss"],
  templateUrl: "repos.component.html",
})
export class ReposComponent {
  login: string;
  repos: IRepo[] = [];
  reposFiltered = {} as IRepo;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: ApiService,
    private modalService: NgbModal
  ) {}

  //Repo loader
  ngOnInit() {
    this.login = this.activatedRoute.snapshot.params["username"];
    this.http.getRepo(this.login).subscribe((data) => {
      this.repos = data;
    });
  }
  //Bootstrap
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }

  //Choosen Repo
  selectRepo(data) {
    this.reposFiltered = data;
  }

  likeRepo(data) {
    this.http.likeRepo(data).subscribe();
  }
}
