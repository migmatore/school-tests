import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./components/login/login.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { TestsListComponent } from "./components/tests-list/tests-list.component";
import { TestDetailComponent } from "./components/test-detail/test-detail.component";
import { UsersListComponent } from "./components/users-list/users-list.component";

import { AuthGuardService } from "./components/auth/auth-guard.service";
import { InformationComponent } from "./components/information/information.component";

const routes: Routes = [
    {
        path: '',
        component: TestsListComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [ AuthGuardService ],
    },
    {
        path: 'tests',
        component: TestDetailComponent,
    },
    {
        path: 'users',
        component: UsersListComponent,
    },
    {
        path: 'info',
        component: InformationComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

