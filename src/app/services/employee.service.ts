import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

data = [
  {
    "Country":"India",
    "Capital":"New Delhi"
  },
  {
    "Country":"China",
    "Capital":"Beijing"
  },
  {
    "Country":"France",
    "Capital":"Paris"
  }
]
  
// getallUsers(){
//   console.log(this.data);
// }



}
