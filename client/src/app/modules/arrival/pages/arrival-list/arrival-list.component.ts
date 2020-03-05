import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../../service/api.service';

@Component({
  selector: 'app-arrival-list',
  templateUrl: './arrival-list.component.html',
  styleUrls: ['./arrival-list.component.css']
})
export class ArrivalListComponent implements OnInit {
  Arrival: any = [];

  constructor(private apiService: ApiService) { 
    this.readArrival();
  }

  ngOnInit(): void {
    console.log('arrivals init');
  }

  readArrival(){
    this.apiService.getArrivals().subscribe((data) => {
     this.Arrival = data;
    })    
  }

  removeArrival(arrival, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteArrival(arrival._id).subscribe((data) => {
          this.Arrival.splice(index, 1);
        }
      )    
    }
  }

}
