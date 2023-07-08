import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.sass']
})
export class NewUserComponent implements OnInit {
	@Input() name: any;
  form!: FormGroup;
  
	constructor(public activeModal: NgbActiveModal, private readonly formBuilder: FormBuilder,) {
    this.setForm();
  }

  ngOnInit(): void {

  }

  setForm() {
    this.form = this.formBuilder.group({
      fullName: [null, [Validators.required]],
      email: [null, [Validators.email]],
      pass: [null, [Validators.required]],
    });
  }

  uploadData(){
    if(this.form.valid){
      this.activeModal.close(this.form.getRawValue());
    }
  }

}
