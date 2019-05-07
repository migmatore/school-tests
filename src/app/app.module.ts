import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule, MatIconModule, MatInputModule,
    MatRadioModule,
    MatTableModule
} from '@angular/material';

import { JwtModule } from "@auth0/angular-jwt";

import { AppComponent } from './app.component';
import { ExampleDialog, TestDetailComponent } from './components/test-detail/test-detail.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { TestCardComponent } from './components/test-card/test-card.component';
import { TestsListComponent } from './components/tests-list/tests-list.component';
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InformationComponent } from './components/information/information.component';
import { CategoryComponent } from './components/information/category/category.component';

@NgModule({
    declarations: [
        AppComponent,
        TestDetailComponent,
        ExampleDialog,
        UsersListComponent,
        TestCardComponent,
        TestsListComponent,
        HeaderComponent,
        LoginComponent,
        ProfileComponent,
        InformationComponent,
        CategoryComponent,
    ],
    entryComponents: [
        ExampleDialog,
        CategoryComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,

        MatRadioModule,
        MatButtonModule,
        MatDialogModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,

        AppRoutingModule,

        JwtModule.forRoot({
            config: {
                tokenGetter: () => {
                    return localStorage.getItem('auth_token');
                },
                whitelistedDomains: ['127.0.0.1:8000'],
                blacklistedRoutes: ['']
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
