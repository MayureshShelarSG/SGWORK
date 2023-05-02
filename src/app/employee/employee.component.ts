import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  item = '';

  addItem(newItem: string) {
    this.item=newItem;
  }

employees: any[]=[]
currentItem = 'Television';
constructor(private employeeService:EmployeeService){

}

ngOnInit(){
  this.employees= this.employeeService.data;
}


}
