import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManageDosenDetailComponent } from '../manage-dosen-detail/manage-dosen-detail.component';
import { ManageDosenService } from './manage-dosen.service';

@Component({
  selector: 'app-manage-dosen',
  templateUrl: './manage-dosen.component.html',
  styleUrls: ['./manage-dosen.component.scss']
})
export class ManageDosenComponent implements OnInit {
  dataDosen: any;
  title = 'Data Dosen';

  constructor(private dialog: MatDialog, private managedosenService: ManageDosenService) {}

  manageDosenDetail(data: any, idx: number) {
    const dialogRef = this.dialog.open(ManageDosenDetailComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        if (idx === -1) {
          this.dataDosen.push(res);
        } else {
          this.dataDosen[idx] = res;
        }
      }
    });
  }

  ngOnInit(): void {
    this.getDosen();
  }

  getDosen() {
    this.managedosenService.getDosen().subscribe((res: any) => {
      this.dataDosen = res;
    });
  }

  deleteDosen(idx: number) {
    const conf = confirm('Hapus data dosen?');
    if (conf) {
      this.managedosenService.deleteDosen(this.dataDosen[idx].id).subscribe((response: any) => {
        console.log('Response from deleteDosen:', response);
        this.dataDosen.splice(idx, 1);
      });
    }
  }
}
