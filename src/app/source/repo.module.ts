import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RepoComponent } from '../repo/repos.component'
@NgModule({
  imports:[FormsModule, BrowserModule],
  declarations:[RepoComponent]
})
export class RepoModule{}