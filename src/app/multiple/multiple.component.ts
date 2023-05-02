import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.scss']
})
export class MultipleComponent {
  value1:number=0;
  data:any = []; // An array to store form values
  data2:any=[];
  myform = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  onSubmit() {
    this.data.push(this.myform.value); // Save the form data to the array
    alert("form details saved!")
    // this.myform.reset(); // Reset the form after submission
  }

  resetForm() {
    this.myform.reset(); // Reset the form
  }

  showData(){
    this.data2=this.data;
    for (let i = 0; i < this.data2.length; i++) {
    console.log(this.data2[i], this.data2[i].findIndex);
    var val=this.data2.indexOf[i];
   }
  }

  // ondelete(value1){
  //   delete this.data2[this.value1];
  // }

  ondeleteitem(index:number):void{
     this.data2.splice(index,1);
  }
}
