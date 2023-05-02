import { Component } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent {

  fullname;
  email;
  phone;
  address;
  
  
  constructor(private router: ActivatedRoute) 
  {
    this.fullname = this.router.snapshot.paramMap.get('fullname');
    this.email = this.router.snapshot.paramMap.get('email');
    this.phone = this.router.snapshot.paramMap.get('phone');
    this.address = this.router.snapshot.paramMap.get('address');
  } 
  ngOnInit(): void
   { 
    this.fullname = localStorage.getItem('fullname'); 
    this.email=localStorage.getItem('email');
    this.phone= localStorage.getItem('phone'); 
    this.address=localStorage.getItem('address');

}

}


