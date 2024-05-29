import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../classes/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private addEmployeeURL = "https://harmonious-freedom-production.up.railway.app/addEmployeeLoginDetails";
  constructor(private httpClient: HttpClient) { }

  addEmployee(employee: Employee): Observable<any>
  {
    return this.httpClient.post(`${this.addEmployeeURL}`,employee);
  }
}
