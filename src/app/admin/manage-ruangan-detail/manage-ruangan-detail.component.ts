import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-ruangan-detail',
  templateUrl: './manage-ruangan-detail.component.html',
  styleUrls: ['./manage-ruangan-detail.component.scss']
})
export class ManageRuanganDetailComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ManageRuanganDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  saveData() {
    this.dialogRef.close(this.data);
  }
}
