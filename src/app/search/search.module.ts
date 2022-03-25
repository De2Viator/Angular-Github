import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReposComponent } from '../repos/repos.component';
import { UserModule } from '../user/user.module';


const appRoutes: Routes =[
  { path:'repos/:username', component: ReposComponent}
]
@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, FormsModule, RouterModule.forRoot(appRoutes),UserModule],
  exports:[SearchComponent],
})
export class SearchModule { }
