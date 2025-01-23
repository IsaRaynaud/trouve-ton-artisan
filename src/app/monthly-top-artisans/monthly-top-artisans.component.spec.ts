import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyTopArtisansComponent } from './monthly-top-artisans.component';

describe('MonthlyTopArtisansComponent', () => {
  let component: MonthlyTopArtisansComponent;
  let fixture: ComponentFixture<MonthlyTopArtisansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthlyTopArtisansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyTopArtisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
