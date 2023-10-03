import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDosenComponent } from './manage-dosen.component';

describe('ManageDosenComponent', () => {
  let component: ManageDosenComponent;
  let fixture: ComponentFixture<ManageDosenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageDosenComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
