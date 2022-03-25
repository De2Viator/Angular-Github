import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReposModule } from './repos/repos.module';
import { ListModule } from './list/list.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { RepoComponent } from './repo/repo.component';




@NgModule({
    declarations:[AppComponent],
    imports:[BrowserModule, 
             HttpClientModule, 
             NgbModule, 
             ReposModule,
             AppRoutingModule,
             RouterModule,
             ListModule],
    bootstrap:[ AppComponent ]
})
export class AppModule { }