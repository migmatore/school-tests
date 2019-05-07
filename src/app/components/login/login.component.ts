import { Component, OnInit } from '@angular/core';

import axios from 'axios';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public username: string;
    public password: string;

    constructor() { }

    ngOnInit() {
    }

    public login() {
        let formData = new FormData();

        formData.append("username", this.username);
        formData.append("password", this.password);

        axios.post('http://127.0.0.1:8000/auth/token/create/', formData)
            .then(response => {
                console.log(response.data.data.attributes.auth_token);

                alert("Спасибо что вы с нами");

                localStorage.setItem("auth_token", response.data.data.attributes.auth_token);
            })
            .catch(error => {
                // if (error.response.status === 400) {
                //     alert("Логин или пароль не верен");
                // }
                console.log(error);
            });
    }
}
