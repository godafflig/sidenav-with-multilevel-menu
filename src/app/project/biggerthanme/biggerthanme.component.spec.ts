import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiggerthanmeComponent } from './biggerthanme.component';

describe('BiggerthanmeComponent', () => {
  let component: BiggerthanmeComponent;
  let fixture: ComponentFixture<BiggerthanmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiggerthanmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiggerthanmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
