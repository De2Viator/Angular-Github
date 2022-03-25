import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent }   from './list.component';
import { SearchModule } from '../search/search.module';
import { AppRoutingModule } from '../app-routing.module';
import { UserModule } from '../user/user.module';
import { RepoModule } from '../repo/repo.module';


@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, SearchModule, AppRoutingModule, UserModule, RepoModule],
  exports: [ListComponent]
})
export class ListModule { }
