import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanSCardComponent } from './artisan-card.component';

describe('ArtisanSCardComponent', () => {
  let component: ArtisanSCardComponent;
  let fixture: ComponentFixture<ArtisanSCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtisanSCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisanSCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
