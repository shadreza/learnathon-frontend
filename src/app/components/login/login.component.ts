import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted : boolean = false
  title : string = "Login"
  passwordTypePassword: boolean = true
  // formControls
  loginUserFormGroup !: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.loginUserFormGroup = this.formBuilder.group({
      userName : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmitLoginForm() {
    console.log(this.loginUserFormGroup.value)
  }

}
