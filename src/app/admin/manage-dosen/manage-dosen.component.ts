import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManageDosenDetailComponent } from '../manage-dosen-detail/manage-dosen-detail.component';

@Component({
  selector: 'app-manage-dosen',
  templateUrl: './manage-dosen.component.html',
  styleUrls: ['./manage-dosen.component.scss']
})
export class ManageDosenComponent implements OnInit {
  title!: string;
  dosens: string[] = [];
  codedosens: string[] = [];
  nips: (number | null)[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.title = 'Dosen';
    this.getDosens();
    this.getCodedosens();
    this.getNips();
  }

  manageDosenDetail(dosen: string, idx: number) {
    const dialogRef = this.dialog.open(ManageDosenDetailComponent, {
      width: '400px',
      data: { title: dosen, author: this.codedosens[idx], nip: this.nips[idx] },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (idx === -1) {
          this.dosens.push(result.title);
          this.codedosens.push(result.author);
          const nipValue = parseInt(result.nip, 10);
          this.nips.push(isNaN(nipValue) ? null : nipValue);
        } else {
          this.dosens[idx] = result.title;
          this.codedosens[idx] = result.author;
          const nipValue = parseInt(result.nip, 10);
          this.nips[idx] = isNaN(nipValue) ? null : nipValue;
        }
      }
    });
  }

  getDosens() {
    this.dosens = ['Gandalf', 'Riska'];
  }

  getCodedosens() {
    this.codedosens = ['GDF', 'RSK'];
  }

  getNips() {
    this.nips = [1234567890, 9876543210];
  }

  deleteDosen(idx: number) {
    const conf = confirm('Hapus dosen?');
    if (conf) {
      this.dosens.splice(idx, 1);
      this.codedosens.splice(idx, 1);
      this.nips.splice(idx, 1);
    }
  }
}
