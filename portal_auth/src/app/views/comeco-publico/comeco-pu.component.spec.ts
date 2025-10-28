import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComecoPublicoComponent } from './comeco-pu.component';

describe('ComecoPublicoComponent', () => {
  let component: ComecoPublicoComponent;
  let fixture: ComponentFixture<ComecoPublicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComecoPublicoComponent]
    });
    fixture = TestBed.createComponent(ComecoPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
