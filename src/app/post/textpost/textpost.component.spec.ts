import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextpostComponent } from './textpost.component';

describe('TextpostComponent', () => {
  let component: TextpostComponent;
  let fixture: ComponentFixture<TextpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
