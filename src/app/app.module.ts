import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleDialog, TestDetailComponent } from './components/test-detail/test-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule, MatInputModule,
    MatRadioModule,
    MatTableModule
} from '@angular/material';
import { RouterModule, Routes } from "@angular/router";
import { UsersListComponent } from './components/users-list/users-list.component';


const routes: Routes = [
    {
        path: '',
        component: AppComponent,
    },
    {
        path: 'tests',
        component: TestDetailComponent,
    },
    {
        path: 'users',
        component: UsersListComponent,
    }
];

@NgModule({
      declarations: [
          AppComponent,
          TestDetailComponent,
          ExampleDialog,
          UsersListComponent
      ],
      entryComponents: [
          ExampleDialog
      ],
    imports: [
        RouterModule.forRoot(
            routes,
            {enableTracing: true} // <-- debugging purposes only
        ),
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,

        MatRadioModule,
        MatButtonModule,
        MatDialogModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ],
      providers: [],
      bootstrap: [AppComponent]
})
export class AppModule { }
