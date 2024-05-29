import { Component, OnInit } from '@angular/core';
import { Employee } from '../../classes/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {


  }
  onClick()
  {
    this.employeeService.addEmployee(this.employee).subscribe(data =>
    {
    }
    )
    alert("User Added Successfully");
    window.location.reload();

  }
}
