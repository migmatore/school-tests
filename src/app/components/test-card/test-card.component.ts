import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-test-card',
    templateUrl: './test-card.component.html',
    styleUrls: ['./test-card.component.scss']
})
export class TestCardComponent implements OnInit {
    @Input()
    public cardTitle: string;

    @Input()
    public miniBody: boolean = false;

    @Input()
    public cardMiniBody: string;

    @Input()
    public body: boolean = false;

    @Input()
    public cardBody: string;

    @Input()
    public cardCategory: string;

    @Input()
    public tags: boolean = false;

    @Input()
    public cardTags: string[];

    @Input()
    public cardAuthor: string;

    @Input()
    public cardAddDate: string;

    constructor() { }

    ngOnInit() {
    }

}
