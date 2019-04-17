import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";

import axios from 'axios';
import { FormControl, Validators } from "@angular/forms";

export interface DialogData {
    points: string
    result: string;
}

const {required} = Validators;

@Component({
    selector: 'app-test-detail',
    templateUrl: './test-detail.component.html',
    styleUrls: ['./test-detail.component.scss']
})
export class TestDetailComponent implements OnInit {
    answer1: string;
    answer2: string;
    answer3: string;

    mistakes: number = null;

    firstName: string;
    lastName: string;
    class: string;

    constructor(public dialog: MatDialog) { }

    ngOnInit() {  }

    private checkAnswer(answer: string, result: string) {
        if (answer != result) {
            this.mistakes++;
        } else {
            this.mistakes = this.mistakes - 1;
        }
    }

    public checkTest(): void {
        // let answers: number[] = [this.answer1, this.answer2, this.answer3, this.answer4];
        //
        // let _answers: number[] = [3, 2, 2, 2];
        //
        // for(let i = 0; i < answers.length; i++) {
        //     for (let j = 0; j < _answers.length; j++) {
        //         if (answers[i] != _answers[j]) {
        //             console.log("bad");
        //             break;
        //         }
        //         if (answers[i] == _answers[j]) {
        //             console.log("good");
        //             break;
        //         }
        //     }
        // }

        let formData = new FormData();


        formData.append("ans1", this.answer1);
        formData.append("ans2", this.answer2);
        formData.append("ans3", this.answer3);
        formData.append("firstName", this.firstName);
        formData.append("lastName", this.lastName);
        formData.append("class", this.class);

        axios.post("https://school-api-app.herokuapp.com/api/test/", formData)
            .then(response => {
                const dialogRef = this.dialog.open(ExampleDialog, {
                    width: '250px',
                    data: {points: response.data["points"], result: response.data["result"]}
                });
                console.log(response)
            })
            .catch(error => console.log(error));
    }
}

@Component({
    selector: 'example-dialog',
    templateUrl: 'example-dialog.html',
})
export class ExampleDialog {

    constructor(
        public dialogRef: MatDialogRef<ExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
