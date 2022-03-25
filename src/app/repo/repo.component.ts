import { Component, Input, OnInit } from '@angular/core';
import { IRepo } from '../models/repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent {
  @Input() repo = {} as IRepo
}
