import { Router } from '@angular/router';
import { ApiService } from './../../../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  submitted = false;
  employeeForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit(): void { }

  mainForm() {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      // email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      // designation: ['', [Validators.required]],
      // phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  updateProfile(e) {
    this.employeeForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  get myForm() {
    return this.employeeForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.employeeForm.valid) {
      return false;
    } else {
      this.apiService.createEmployee(this.employeeForm.value).subscribe(
        (res) => {
          console.log('Employee successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/employees-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
