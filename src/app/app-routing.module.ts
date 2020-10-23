import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AuthGuardServiceService } from './auth-guard-service.service';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    canActivate: [AuthGuardServiceService]
  },
  {
    path:'add-user',
    component:AddUserComponent,
    canActivate: [AuthGuardServiceService]
  },
  {
    path:'add-view',
    component:ViewUserComponent,
    canActivate: [AuthGuardServiceService]
  },
  {
    path:'add-delete',
    component:DeleteUserComponent
  },
  {
    path:'add-update',
    component:UpdateUserComponent,
    canActivate: [AuthGuardServiceService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function newFunction(): string {
  return 'delete/:userId';
}

