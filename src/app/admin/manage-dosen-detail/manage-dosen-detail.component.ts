import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ManageDosenService } from '../manage-dosen/manage-dosen.service';

@Component({
  selector: 'app-manage-dosen-detail',
  templateUrl: './manage-dosen-detail.component.html',
  styleUrls: ['./manage-dosen-detail.component.scss']
})
export class ManageDosenDetailComponent implements OnInit {
  data: any;
  originalData: any;

  constructor(
    public dialogRef: MatDialogRef<ManageDosenDetailComponent>,
    @Inject(MAT_DIALOG_DATA) private dataFromParent: any,
    private dosenService: ManageDosenService
  ) { }

  ngOnInit(): void {
    this.data = { ...this.dataFromParent };
    this.originalData = { ...this.data };
  }

  saveData() {
    if (this.data.id) {
      // Jika data memiliki ID, maka ini adalah pembaruan (PUT request)
      this.dosenService.putDosen(this.data.id, this.data).subscribe((response: any) => {
        console.log('Response from putDosen:', response);
        this.dialogRef.close(this.data);
      });
    } else {
      // Jika data tidak memiliki ID, maka ini adalah penambahan baru (POST request)
      this.dosenService.postDosen(this.data).subscribe((response: any) => {
        console.log('Response from postDosen:', response);
        this.dialogRef.close(this.data);
      });
    }
  }
}
