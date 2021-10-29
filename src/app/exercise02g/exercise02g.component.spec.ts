import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise02gComponent } from './exercise02g.component';

describe('Exercise02gComponent', () => {
  let component: Exercise02gComponent;
  let fixture: ComponentFixture<Exercise02gComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise02gComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise02gComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
