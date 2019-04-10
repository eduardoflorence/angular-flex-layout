import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo3Component } from './exemplo3.component';

describe('Exemplo3Component', () => {
  let component: Exemplo3Component;
  let fixture: ComponentFixture<Exemplo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemplo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exemplo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
