import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotopostComponent } from './photopost.component';

describe('PhotopostComponent', () => {
  let component: PhotopostComponent;
  let fixture: ComponentFixture<PhotopostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotopostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotopostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
