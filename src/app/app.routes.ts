import { Routes } from "@angular/router";
import { LoginComponent } from "./modules/login/login.component";
import { MainComponent } from "./modules/main/main.component";

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'main', component: MainComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
  ];
