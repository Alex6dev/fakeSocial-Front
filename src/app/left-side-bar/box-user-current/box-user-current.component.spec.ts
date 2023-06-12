import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxUserCurrentComponent } from './box-user-current.component';

describe('BoxUserCurrentComponent', () => {
  let component: BoxUserCurrentComponent;
  let fixture: ComponentFixture<BoxUserCurrentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxUserCurrentComponent]
    });
    fixture = TestBed.createComponent(BoxUserCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
