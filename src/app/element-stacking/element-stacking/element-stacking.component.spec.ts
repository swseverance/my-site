import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementStackingComponent } from './element-stacking.component';

describe('ElementStackingComponent', () => {
  let component: ElementStackingComponent;
  let fixture: ComponentFixture<ElementStackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementStackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementStackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
