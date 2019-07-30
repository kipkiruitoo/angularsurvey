import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsurveyComponent } from './editsurvey.component';

describe('EditsurveyComponent', () => {
  let component: EditsurveyComponent;
  let fixture: ComponentFixture<EditsurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
