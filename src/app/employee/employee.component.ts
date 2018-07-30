import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormArray } from '@angular/forms';

import { EmployeeRaw } from '../data/employeeRaw';
import { EmployeeService } from '../data/employee.service';
import { ActivatedRoute } from '@angular/router';
import { PositionService } from '../data/position.service';
import { Position } from '../data/position';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  paramSubScription: any;
  employeeSubscription: any;
  getPositionsSubscription: any;
  saveEmployeeSubscription: any;

  employee: EmployeeRaw;
  positions: any[];

  successMessage: boolean = false;
  failMessage: boolean = false;

  employeeForm: FormGroup;

  constructor(private es: EmployeeService,
              private route: ActivatedRoute,
              private ps: PositionService,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.paramSubScription = this.route.params.subscribe((params) => {
      this.employeeSubscription = this.es.getEmployee(params['_id']).subscribe(data => {
        this.employee = data[0];
        console.log('employee:', this.employee);

        this.getPositionsSubscription = this.ps.getPositions().subscribe(data => {
          this.positions = data;
          console.log('position:', this.positions);
        });

        this.employeeForm = this.fb.group ({
          _id: [this.employee._id],
          FirstName: [this.employee.FirstName, [Validators.required]],
          LastName: [this.employee.LastName, [Validators.required]],
          Position: [this.employee.Position],
          SalaryBonus: [this.employee.SalaryBonus, [Validators.required, Validators.pattern('^[0-9]*$')]],
          AddressStreet: [this.employee.AddressStreet, [Validators.required]],
          AddressCity: [this.employee.AddressCity, [Validators.required]],
          AddressState: [this.employee.AddressState, [Validators.required]],
          AddressZip: [this.employee.AddressZip, [Validators.required]],
          PhoneNum: [this.employee.PhoneNum, [Validators.required]],
          Extension: [this.employee.Extension, [Validators.required, Validators.pattern('^[0-9]*$')]]
        });
      });
    });
  }

  public onSubmit() {
    this.saveEmployeeSubscription = this.es.saveEmployee(this.employeeForm.value).subscribe(() => {
      this.successMessage = true;

      setTimeout(() => {
        this.successMessage = false;
      }, 2500);
    },(err) => {
      console.log("Subscription onSubmit failed " + err);
      this.failMessage = true;

      setTimeout(() => {
        this.failMessage = false;
      }, 2500);
    });
  }

  get FirstName() { return this.employeeForm.get('FirstName'); }
  get LastName() { return this.employeeForm.get('LastName'); }
  get SalaryBonus() { return this.employeeForm.get('SalaryBonus'); }
  get AddressStreet() { return this.employeeForm.get('AddressStreet'); }
  get AddressCity() { return this.employeeForm.get('AddressCity'); }
  get AddressState() { return this.employeeForm.get('AddressState'); }
  get AddressZip() { return this.employeeForm.get('AddressZip'); }
  get PhoneNum() { return this.employeeForm.get('PhoneNum'); }
  get Extension() { return this.employeeForm.get('Extension'); }


  ngOnDestroy() {
    if (this.paramSubScription) { this.paramSubScription.unsubscribe(); }
    if (this.employeeSubscription) { this.employeeSubscription.unsubscribe(); }
    if (this.getPositionsSubscription) { this.getPositionsSubscription.unsubscribe(); }
    if (this.saveEmployeeSubscription) { this.saveEmployeeSubscription.unsubscribe(); }
  }

}
