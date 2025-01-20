import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteStarsComponent } from './note-stars.component';

describe('NoteStarsComponent', () => {
  let component: NoteStarsComponent;
  let fixture: ComponentFixture<NoteStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteStarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
