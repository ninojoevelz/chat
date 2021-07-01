import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginFormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      room: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onEnterRoom(): void {}

}
