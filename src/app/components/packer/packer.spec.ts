import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Packer } from './packer';

describe('Packer', () => {
  let component: Packer;
  let fixture: ComponentFixture<Packer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Packer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Packer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
