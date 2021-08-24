import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListComponent }   from '../list/list.component';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../search/search.component';
import { RepoComponent } from '../repo/repos.component';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes =[
    { path:'', component: ListComponent},
    { path:'repos/:username', component: RepoComponent}
]

@NgModule({
    imports:      [ BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes), NgbModule],
    declarations: [ AppComponent, SearchComponent, ListComponent,  RepoComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }