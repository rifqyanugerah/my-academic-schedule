import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDosenDetailComponent } from './manage-dosen-detail.component';

describe('ManageDosenDetailComponent', () => {
  let component: ManageDosenDetailComponent;
  let fixture: ComponentFixture<ManageDosenDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageDosenDetailComponent]
    });
    fixture = TestBed.createComponent(ManageDosenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
