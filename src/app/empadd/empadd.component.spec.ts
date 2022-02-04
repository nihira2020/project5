import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaddComponent } from './empadd.component';

describe('EmpaddComponent', () => {
  let component: EmpaddComponent;
  let fixture: ComponentFixture<EmpaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
