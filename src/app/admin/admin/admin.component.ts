import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menu = [
    {
      group: 'User Info',
      items: [
        {
          name: 'Foto Profil',
          icon: 'account_circle',
          url: '/admin/foto-profil'
        },
        {
          name: 'NIM/NIP',
          icon: 'credit_card',
          url: '/admin/nim'
        },
        {
          name: 'Nama',
          icon: 'person',
          url: '/admin/nama'
        }
      ]
    },
    {
      group: 'Menu',
      items: [
        {
          name: 'Dashboard',
          icon: 'dashboard',
          url: '/admin/dashboard'
        },
        {
          name: 'Manage Dosen',
          icon: 'people',
          url: '/admin/manage-dosen'
        },
        {
          name: 'Manage Mahasiswa',
          icon: 'people',
          url: '/admin/manage-mahasiswa'
        },
        {
          name: 'Manage Ruangan',
          icon: 'business',
          url: '/admin/manage-ruangan'
        },
        {
          name: 'Manage Jadwal Kuliah',
          icon: 'schedule',
          url: '/admin/manage-jadwal-kuliah'
        },
        {
          name: 'Manage Mata Kuliah',
          icon: 'book',
          url: '/admin/manage-mata-kuliah'
        }
      ]
    }
  ];
}
