import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.scss']
})
export class TestsListComponent implements OnInit {

  testCards = ["География", "История", "Физика", ".....", "....."];

  constructor() { }

  ngOnInit() {
  }

}
