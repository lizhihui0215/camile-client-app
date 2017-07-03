import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';
import { UserService } from '../../shared/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.scss'],
})
export class RegisterComponent {

  form: FormGroup;
  username: AbstractControl;
  name: AbstractControl;
  password: AbstractControl;
  repeatPassword: AbstractControl;
  passwords: FormGroup;
  phone: AbstractControl;
  birthday: AbstractControl;

  submitted: boolean = false;

  constructor(fb: FormBuilder, public userService: UserService) {

    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'name': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'phone': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'birthday': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      }, { validator: EqualPasswordsValidator.validate('password', 'repeatPassword') }),
    });

    this.username = this.form.controls['username'];
    this.name = this.form.controls['name'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.phone = this.form.controls['phone'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
    this.birthday = this.form.controls['birthday'];
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {

      const user = new User(
        this.username.value,
        this.name.value,
        this.phone.value,
        this.password.value,
        this.phone.value);

      this.userService.sigin(user);
    }
  }
}
