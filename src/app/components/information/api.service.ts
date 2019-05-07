import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    public url: string = "https://school-site-api.herokuapp.com/api/v1/";

    constructor() { }
}
