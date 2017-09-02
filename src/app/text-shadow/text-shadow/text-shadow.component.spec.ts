import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextShadowComponent } from './text-shadow.component';

describe('TextShadowComponent', () => {
  let component: TextShadowComponent;
  let fixture: ComponentFixture<TextShadowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextShadowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
