import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouplefamilleComponent } from './couplefamille.component';

describe('CouplefamilleComponent', () => {
  let component: CouplefamilleComponent;
  let fixture: ComponentFixture<CouplefamilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouplefamilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouplefamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
