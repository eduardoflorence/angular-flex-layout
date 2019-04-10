import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo5Component } from './exemplo5.component';

describe('Exemplo5Component', () => {
  let component: Exemplo5Component;
  let fixture: ComponentFixture<Exemplo5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemplo5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exemplo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
