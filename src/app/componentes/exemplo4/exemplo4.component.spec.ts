import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo4Component } from './exemplo4.component';

describe('Exemplo4Component', () => {
  let component: Exemplo4Component;
  let fixture: ComponentFixture<Exemplo4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemplo4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exemplo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
