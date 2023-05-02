import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
text1="";
text2="";
npass="";

validate()
  {
  if(localStorage.getItem("password")==this.text1)
  {
    alert("password matched");
  }
  else if(this.text1==this.text2)
  {
    localStorage.setItem("password",this.npass);
  }  
  else
  {
    alert("passwords do not match!");
  }
  }
}
