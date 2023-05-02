import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
fullname="";
password="";
email="";
regexPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
setcre(){
  if(this.password=="" ) {  
    alert("password should not be empty!");
  }
  else if(this.email=="" ) {  
    alert("email should not be empty!");
  } 
  else if(this.fullname=="" ) {  
    alert("fullname should not be empty!");
  }  
  else if(this.password.length < 4) {   

    alert("Password length less than 8");
  }
  else if(this.password.length >15 ) {  

    alert("Password length more than 15");
  }
  // else if(this.regexPattern.test(this.email)) {  
  //   alert("@@@@@@@");
  // }
  else{        
  localStorage.setItem("fullname",this.fullname);
  localStorage.setItem("email",this.email);
  localStorage.setItem("password",this.password);

  alert(this.fullname + "you have registered successfully ");
  }
} 
}
