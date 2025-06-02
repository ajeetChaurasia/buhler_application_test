import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Closer } from './closer';

describe('Closer', () => {
  let component: Closer;
  let fixture: ComponentFixture<Closer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Closer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Closer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
