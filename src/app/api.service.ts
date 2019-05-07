import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private urlDev: string = 'https://school-api-app.herokuapp.com/';

    constructor() { }

    public getUsersList() {
        axios.get('https://school-api-app.herokuapp.com/api/test/users')
            .then(response => {
                return response.data["data"]
            })
            .catch(error => {
                return error
            });
    }
}
