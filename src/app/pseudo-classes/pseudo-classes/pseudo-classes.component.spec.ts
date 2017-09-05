import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudoClassesComponent } from './pseudo-classes.component';

describe('PseudoClassesComponent', () => {
  let component: PseudoClassesComponent;
  let fixture: ComponentFixture<PseudoClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PseudoClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PseudoClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
