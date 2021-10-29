import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise01gComponent } from './exercise01g.component';

describe('Exercise01gComponent', () => {
  let component: Exercise01gComponent;
  let fixture: ComponentFixture<Exercise01gComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise01gComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise01gComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
