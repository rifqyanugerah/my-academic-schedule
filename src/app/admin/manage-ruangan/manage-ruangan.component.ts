import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManageRuanganDetailComponent } from '../manage-ruangan-detail/manage-ruangan-detail.component';

@Component({
  selector: 'app-manage-ruangan',
  templateUrl: './manage-ruangan.component.html',
  styleUrls: ['./manage-ruangan.component.scss']
})
export class ManageRuanganComponent implements OnInit {
  title!: string;
  ruangans: string[] = [];
  coderuangans: string[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.title='Ruangan';
    this.getRuangans();
    this.getCoderuangans();

  }

  manageRuanganDetail(ruangan: string, idx: number) {
    const dialogRef = this.dialog.open(ManageRuanganDetailComponent, {
      width: '400px',
      data: { title: ruangan, author: this.coderuangans[idx] },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (idx === -1) {
          this.ruangans.push(result.title);
          this.coderuangans.push(result.author);
        } else {
          this.ruangans[idx] = result.title;
          this.coderuangans[idx] = result.author;
        }
      }
    });
  }

  getRuangans()
  {
    this.ruangans = ['D3IF-45-05', 'D3IF-45-03'];
  }

  getCoderuangans()
  {
    this.coderuangans = ['KU3.03.13', 'B2'];
  }

  deleteRuangan(idx: number) {
    const conf = confirm('Hapus ruangan?');
    if (conf) {
      this.ruangans.splice(idx, 1);
      this.coderuangans.splice(idx, 1);
    }
  }
}
