import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
title:String='First Component trial';
username:String='mayuresh';
Months =['jan','feb','March'];

onClick()
{
  alert(this.username)
}

user="mayuresh";
password="mayuresh";
text1="";
text2="";


validate()
{
  if(this.user==this.text1 && this.password==this.text2)
{
   alert("validation succeeded");
}
else
{
   alert("validation failed");
}
}

}