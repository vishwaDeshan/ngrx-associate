import { Component, OnInit, Inject } from '@angular/core';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {
  addAssociates,
  updateAssociate,
} from 'src/app/Store/Associate/associate.actions';
import { getAssociate } from 'src/app/Store/Associate/associate.selectors';
import { Associate } from 'src/app/Store/Model/Associate.model';

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
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<{ Associate: Associate }>
  ) {}
  ngOnInit(): void {
    this.dialogData = this.data;
    this.title = this.dialogData.title;
    this.store.select(getAssociate);
    this.store.select(getAssociate).subscribe((data) => {
      this.associateForm.setValue({
        id: data.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        type: data.type,
        group: data.associategroup,
        status: data.status,
      });
    });
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
      const _inputData: Associate = {
        id: this.associateForm.value.id as number,
        name: this.associateForm.value.name as string,
        email: this.associateForm.value.email as string,
        phone: this.associateForm.value.phone as string,
        address: this.associateForm.value.address as string,
        type: this.associateForm.value.type as string,
        associategroup: this.associateForm.value.group as string,
        status: this.associateForm.value.status as boolean,
      };
      if (_inputData.id === 0) {
        this.store.dispatch(addAssociates({ inputData: _inputData }));
      } else {
        this.store.dispatch(updateAssociate({ inputData: _inputData }));
      }
      this.closePopup();
    }
  }
}
