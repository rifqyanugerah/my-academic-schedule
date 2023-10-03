import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-dosen-detail',
  templateUrl: './manage-dosen-detail.component.html',
  styleUrls: ['./manage-dosen-detail.component.scss']
})
export class ManageDosenDetailComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ManageDosenDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  saveData() {
    this.dialogRef.close(this.data);
  }
}
