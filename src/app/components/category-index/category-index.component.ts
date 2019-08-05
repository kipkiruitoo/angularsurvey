import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-category-index',
  templateUrl: './category-index.component.html',
  styleUrls: ['./category-index.component.css']
})
export class CategoryIndexComponent implements OnInit {

  constructor(private _router: Router, ) { }

  questions: any;
  ngOnInit() {
    this.questions = JSON.parse(localStorage.getItem('question'));
    console.log(this.questions)

  }
  editCategory(id) {
    localStorage.setItem('categoryedit', id);
    console.log("clicked")
    this._router.navigate(['editsurvey'])
  }
  add() {
    console.log('add')
    this._router.navigate(['createsurvey']);

  }

}
