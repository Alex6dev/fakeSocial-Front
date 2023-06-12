import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsForYouItemComponent } from './trends-for-you-item.component';

describe('TrendsForYouItemComponent', () => {
  let component: TrendsForYouItemComponent;
  let fixture: ComponentFixture<TrendsForYouItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendsForYouItemComponent]
    });
    fixture = TestBed.createComponent(TrendsForYouItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
