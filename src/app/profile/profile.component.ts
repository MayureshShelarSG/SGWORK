import { Component } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

//   fullname;

//   constructor(private router: ActivatedRoute) 
//   {
//     this.fullname = this.router.snapshot.paramMap.get('fullname');
    
//   } 
//   ngOnInit(): void
//    { 
//     this.fullname = localStorage.getItem('fullname'); 
    
// }


// setcre(){
//   localStorage.setItem("fullname",this.fullname);
//   localStorage.setItem("email",this.email);
//   localStorage.setItem("password",this.password);

//   alert(this.fullname + " Updated Succesfully!");
//   }

fullname="";
password="";
email="";
phone="";
mobile="";
address="";




constructor(private router: ActivatedRoute,private Router:Router) 
{
  this.fullname = localStorage.getItem('fullname')!;
  this.email=localStorage.getItem('email')!;
  this.phone= localStorage.getItem('phone')!; 
  this.address=localStorage.getItem('address')!;
  this.password=localStorage.getItem('password')!;
} 
ngOnInit(): void
   { 
     
  
   }


setcre(){
  localStorage.setItem("fullname",this.fullname);
  localStorage.setItem("email",this.email);
  localStorage.setItem("password",this.password);
  localStorage.setItem("phone",this.phone);
  localStorage.setItem("address",this.address);

  alert(this.fullname + " Updated successfully");
  }
}