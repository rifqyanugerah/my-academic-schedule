import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRuanganComponent } from './manage-ruangan.component';

describe('ManageRuanganComponent', () => {
  let component: ManageRuanganComponent;
  let fixture: ComponentFixture<ManageRuanganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageRuanganComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRuanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
