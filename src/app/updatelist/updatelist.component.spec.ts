import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelistComponent } from './updatelist.component';

describe('UpdatelistComponent', () => {
  let component: UpdatelistComponent;
  let fixture: ComponentFixture<UpdatelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
