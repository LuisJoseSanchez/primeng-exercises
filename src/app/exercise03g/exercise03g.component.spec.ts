import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise03gComponent } from './exercise03g.component';

describe('Exercise03gComponent', () => {
  let component: Exercise03gComponent;
  let fixture: ComponentFixture<Exercise03gComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise03gComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise03gComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
