import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRuanganDetailComponent } from './manage-ruangan-detail.component';

describe('ManageRuanganDetailComponent', () => {
  let component: ManageRuanganDetailComponent;
  let fixture: ComponentFixture<ManageRuanganDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageRuanganDetailComponent]
    });
    fixture = TestBed.createComponent(ManageRuanganDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
