import { Component, OnInit, Inject } from '@angular/core';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Associates } from 'src/app/Store/Model/Associate.model';

interface AssociatesData {
  id: number;
  value: string;
}

@Component({
  selector: 'app-addassociate',
  templateUrl: './addassociate.component.html',
  styleUrls: ['./addassociate.component.css'],
})
export class AddassociateComponent implements OnInit {
  title: string = 'Create Associate';
  isEdit: boolean = false;
  dialogData: any;

  constructor(
    private builder: FormBuilder,
    private ref: MatDialogRef<AddassociateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    this.dialogData = this.data;
    this.title = this.dialogData.title;
  }

  closePopup() {
    this.ref.close();
  }

  AssociateList: AssociatesData[] = [
    { id: 1, value: 'Level 1' },
    { id: 2, value: 'Level 2' },
    { id: 3, value: 'Level 3' },
    { id: 4, value: 'Level 4' },
  ];

  associateForm = this.builder.group({
    id: this.builder.control(0),
    name: this.builder.control('', Validators.required),
    email: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    phone: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required),
    type: this.builder.control('CUSTOMER'),
    group: this.builder.control('Level 1'),
    status: this.builder.control(true),
  });

  SaveAssociate() {
    if (this.associateForm.valid) {
    }
  }
}
