import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-summary',
  templateUrl: './category-summary.component.html',
  styleUrls: ['./category-summary.component.css']
})
export class CategorySummaryComponent implements OnInit {

  constructor(private _router: Router,) { }

  ngOnInit() {
  }
  startsurvey(){
    this._router.navigate(['viewsurvey'])
  }

}
