import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddassociateComponent } from '../addassociate/addassociate.component';
import { Store } from '@ngrx/store';
import { Associates } from 'src/app/Store/Model/Associate.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { getAssociateList } from 'src/app/Store/Associate/associate.selectors';
import { loadAssociates } from 'src/app/Store/Associate/Associate.actions';

@Component({
  selector: 'app-associatelisting',
  templateUrl: './associatelisting.component.html',
  styleUrls: ['./associatelisting.component.css'],
})
export class AssociatelistingComponent implements OnInit {
  AssociateList!: Associates[];
  datasource: MatTableDataSource<Associates>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'code',
    'name',
    'email',
    'phone',
    'address',
    'group',
    'type',
    'status',
    'action',
  ];

  constructor(private dialog: MatDialog, private store: Store) {
    this.datasource = new MatTableDataSource<Associates>();
  }

  ngOnInit(): void {
    this.store.dispatch(loadAssociates());
    this.store.select(getAssociateList).subscribe((item) => {
      this.AssociateList = item;
      this.datasource.data = this.AssociateList;
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    });
  }

  AddAssociate() {
    this.OpenPopup(0, 'Create Associate');
  }

  EditAssociate(id: number) {}

  DeleteAssociate(id: number) {}

  OpenPopup(code: number, title: string) {
    this.dialog.open(AddassociateComponent, {
      width: '50%',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      data: {
        code: code,
        title: title,
      },
    });
  }
}
