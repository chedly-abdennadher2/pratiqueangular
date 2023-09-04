import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadallComponent } from './readall.component';

describe('ReadallComponent', () => {
  let component: ReadallComponent;
  let fixture: ComponentFixture<ReadallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadallComponent]
    });
    fixture = TestBed.createComponent(ReadallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
