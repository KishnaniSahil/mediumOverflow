import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChattemplateComponent } from './chattemplate.component';

describe('ChattemplateComponent', () => {
  let component: ChattemplateComponent;
  let fixture: ComponentFixture<ChattemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChattemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChattemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
