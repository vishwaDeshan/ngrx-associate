import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddassociateComponent } from '../addassociate/addassociate.component';
import { Store } from '@ngrx/store';
import { Associate } from 'src/app/Store/Model/Associate.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { getAssociateList } from 'src/app/Store/Associate/associate.selectors';
import {
  deleteAssociate,
  getAssociates,
  loadAssociates,
  openPopup,
} from 'src/app/Store/Associate/associate.actions';

@Component({
  selector: 'app-associatelisting',
  templateUrl: './associatelisting.component.html',
  styleUrls: ['./associatelisting.component.css'],
})
export class AssociatelistingComponent implements OnInit {
  AssociateList!: Associate[];
  datasource: MatTableDataSource<Associate>;
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
    this.datasource = new MatTableDataSource<Associate>();
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
    this.OpenPopupDialog(0, 'Create Associate');
  }

  EditAssociate(id: number) {
    this.OpenPopupDialog(id, 'Update Associate');
    this.store.dispatch(getAssociates({ id }));
  }

  DeleteAssociate(id: number) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.store.dispatch(deleteAssociate({ id }));
    }
  }

  OpenPopupDialog(code: number, title: string) {
    this.store.dispatch(openPopup());
    this.dialog.open(AddassociateComponent, {
      width: '50%',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: {
        code: code,
        title: title,
      },
    });
  }
}
