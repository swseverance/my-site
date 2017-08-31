import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineHeightComponent } from './line-height.component';

describe('LineHeightComponent', () => {
  let component: LineHeightComponent;
  let fixture: ComponentFixture<LineHeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineHeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
