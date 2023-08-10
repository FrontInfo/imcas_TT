import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackDescriptionComponent } from './feedback-description.component';

describe('FeedbackDescriptionComponent', () => {
  let component: FeedbackDescriptionComponent;
  let fixture: ComponentFixture<FeedbackDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
