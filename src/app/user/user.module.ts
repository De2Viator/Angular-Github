import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, RouterModule, AppRoutingModule],
  exports:[UserComponent]
})
export class UserModule { }
