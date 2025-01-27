import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingArtisansComponent } from './manufacturing-artisans.component';

describe('ManufacturingArtisansComponent', () => {
  let component: ManufacturingArtisansComponent;
  let fixture: ComponentFixture<ManufacturingArtisansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManufacturingArtisansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManufacturingArtisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
