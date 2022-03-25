import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ReposComponent } from './repos.component';
import { RepoModule } from '../../app/repo/repo.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/**/

@NgModule({
  imports:[FormsModule, BrowserModule, AppRoutingModule, RepoModule, NgbModule],
  declarations:[ReposComponent],
  exports:[ReposComponent],
})
export class ReposModule{}