import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attacher } from './attacher';

describe('Attacher', () => {
  let component: Attacher;
  let fixture: ComponentFixture<Attacher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Attacher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Attacher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
