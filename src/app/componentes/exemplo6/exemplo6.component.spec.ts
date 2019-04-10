import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo6Component } from './exemplo6.component';

describe('Exemplo6Component', () => {
  let component: Exemplo6Component;
  let fixture: ComponentFixture<Exemplo6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemplo6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exemplo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
