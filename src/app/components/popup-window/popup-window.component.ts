import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbDateService } from '@nebular/theme';

@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.scss']
})
export class PopupWindowComponent implements OnInit {

  max: Date = new Date()

  // formControls
  editUserFormGroup !: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    protected dateService: NbDateService<Date>
  ) {
    this.editUserFormGroup = this.formBuilder.group({
      email : ['', Validators.required],
      dob : ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.max = new Date()
  }

  onSubmitEditUserForm() {
    console.log(this.editUserFormGroup.value)
  }

}
