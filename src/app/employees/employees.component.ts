import { Component, OnInit } from '@angular/core';
import { Employee } from '../data/employee';
import { EmployeeService } from '../data/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  getEmployeeSub: any;
  loadingError: boolean = false;

  filteredEmployees: Employee[];
    
  constructor(private e: EmployeeService,
              private router: Router) { }

  ngOnInit() {
    this.getEmployeeSub = this.e.getEmployees().subscribe(data => {
      this.employees = data;
      this.filteredEmployees = data;
    },() => {
      this.loadingError = true;
    });
  }

  routeEmployee(id: string) {
    this.router.navigate(['/employee', id]);
  }

  onEmployeeSearchKeyUP(event:any) {
    let value = event.target.value.toLowerCase();

    this.filteredEmployees = this.employees.filter((employees) => {    
      if (employees.FirstName.toLowerCase().includes(value) || 
          employees.LastName.toLowerCase().includes(value) ||
          employees.Position.PositionName.toLowerCase().includes(value) ||
          employees.PhoneNum.toLowerCase().includes(value)) 
      {
        return true;
      }
    });
  }

  ngOnDestroy() {
    if (this.getEmployeeSub) { this.getEmployeeSub.unsubscribe(); }
  }

}
