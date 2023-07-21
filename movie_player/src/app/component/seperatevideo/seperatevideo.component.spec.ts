import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeperatevideoComponent } from './seperatevideo.component';

describe('SeperatevideoComponent', () => {
  let component: SeperatevideoComponent;
  let fixture: ComponentFixture<SeperatevideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeperatevideoComponent]
    });
    fixture = TestBed.createComponent(SeperatevideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
