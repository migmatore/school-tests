import { Component, OnInit } from '@angular/core';

import { ApiService } from "../../api.service";

import axios from 'axios';

export interface IUsers {
    id: string,
    first_name: string,
    last_name: string
    class: string,
    points: string,
    result: string,
}

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

    public users: IUsers[];
    public displayedColumns: string[] = ['first_name', 'last_name', 'class', 'points', 'result'];

    constructor(private api: ApiService) { }

    ngOnInit() {
        axios.get('https://school-api-app.herokuapp.com/api/test/users')
            .then(response => this.users = response.data["data"])
            .catch(error => console.log(error))
    }
}
