import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component {
  title:String='First Component trial';
  username:String='mayuresh';
  Months =['jan','feb','March'];

  constructor(private router: Router) { }
  
  onClick()
  {
    alert(this.username)
  }
  
  user="mayuresh";
  password="1234";
  text1="";
  text2="";

validate()
{
  if(localStorage.getItem("fullname")==this.text1 && localStorage.getItem("password")==this.text2)
{
  alert("login Succesful!");
  this.router.navigate(['/landing']);
} 
else
{
  alert("Login failed please enter accurate credentials!");
}

}
}
