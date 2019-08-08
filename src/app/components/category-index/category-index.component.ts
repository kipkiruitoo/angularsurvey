import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SurveyService } from '../../services/survey.service';
@Component({
  selector: 'app-category-index',
  templateUrl: './category-index.component.html',
  styleUrls: ['./category-index.component.css']
})
export class CategoryIndexComponent implements OnInit {

  constructor(private _router: Router, private surveyservice: SurveyService) { }

  questions: any;
  categories = [];
  isloading = true;
  ngOnInit() {
    this.surveyservice.getCategory()
      .subscribe(
        res => {
          this.categories.push(res),
            console.log(this.categories);
          localStorage.setItem('questions', JSON.stringify(this.categories[0]))
          this.questions = JSON.parse(localStorage.getItem('questions'));
          this.isloading = !this.isloading;;
        },
        err => console.log(err)
      );

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
  delete(id) {
    this.surveyservice.deleteCategory(id).subscribe(res => {
      console.log(res)
      this.surveyservice.getCategory()
        .subscribe(
          res => {
            this.categories.push(res),
              console.log(this.categories);
            localStorage.setItem('question', JSON.stringify(this.categories[0]))

            this._router.navigate(['surveys'])
            location.reload();

          },
          err => console.log(err)
        );

    })
  }

}
