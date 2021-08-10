import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SearchComponent }   from '../list/search.component';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../search/list.component';
import { RepoComponent } from '../repo/repos.component';
import { AppComponent } from './app.component';
import { RepoChildComponent } from'../repo/repos.child.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes =[
    { path:'', component: SearchComponent},
    { path:'repos/:username', component: RepoComponent}
]

@NgModule({
    imports:      [ BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes), NgbModule],
    declarations: [ SearchComponent, ListComponent, AppComponent, RepoChildComponent, RepoComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }