import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SurveyService } from '../../services/survey.service';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-category-index',
  templateUrl: './category-index.component.html',
  styleUrls: ['./category-index.component.css']
})
export class CategoryIndexComponent implements OnInit {

  constructor(private _router: Router, private surveyservice: SurveyService, private notifier: NotifierService) { }

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
          this.isloading = !this.isloading;
        },
        err => console.log(err)
      );

    // console.log(this.questions)

  }
  editCategory(id) {
    this.loadspinner();
    this.isloading = true;
    this.surveyservice.getCategory()
      .subscribe(
        res => {
          this.categories.push(res),
            console.log(this.categories);
          localStorage.setItem('question', JSON.stringify(this.categories[0]))



          localStorage.setItem('categoryedit', id);
          // console.log("clicked")
          this._router.navigate(['editsurvey'])
          // this.isloading = false;

        },
        err => console.log(err)
      );



  }
  loadspinner() {
    this.isloading = true;
  }
  add() {
    console.log('add')
    this._router.navigate(['createsurvey']);

  }
  delete(id) {
    this.isloading = true;
    this.surveyservice.deleteCategory(id).subscribe(res => {
      console.log(res)
      this.surveyservice.getCategory()
        .subscribe(
          res => {
            this.categories.push(res),
              console.log(this.categories);
            localStorage.setItem('question', JSON.stringify(this.categories[0]))
            this.isloading = false;
            this._router.navigate(['surveys'])
            this.notifier.notify('error', 'Delete was Successful')

            location.reload();

          },
          err => console.log(err)
        );

    })
  }

}
