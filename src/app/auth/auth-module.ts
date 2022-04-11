import {AuthComponent} from "./auth.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{path: '', component: AuthComponent}]

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
   CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthModule { }
