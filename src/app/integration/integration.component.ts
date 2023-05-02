import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss']
})
export class IntegrationComponent implements OnInit{

  constructor(private apiService: ApiService){  }


  ngOnInit(): void{
    this.apiService.getpost();
  }
}
