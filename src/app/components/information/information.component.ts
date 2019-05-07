import { Component, OnInit } from '@angular/core';

import axios from 'axios';

export interface ISubjectCategory {
    id: string;
    title: string;
}

@Component({
    selector: 'app-information',
    templateUrl: './information.component.html',
    styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
    public subjects = [];

    constructor() { }

    ngOnInit() {
        axios.get("https://school-site-api.herokuapp.com/api/v1/subject/")
            .then(response => {
                this.subjects = Object.values(response.data.data["data"])
            })
            .catch(error => console.log(error));
    }
}
