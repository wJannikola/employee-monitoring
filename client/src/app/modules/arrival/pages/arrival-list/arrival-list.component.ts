import { Component, OnInit } from '@angular/core';

import { ArrivalService } from './../../../../shared/service/arrival/arrival.service';

@Component({
  selector: 'app-arrival-list',
  templateUrl: './arrival-list.component.html',
  styleUrls: ['./arrival-list.component.css']
})
export class ArrivalListComponent implements OnInit {
  Arrival: any = [];

  constructor(
    private arrivalService: ArrivalService
    ) { 
    this.readArrival();
  }

  ngOnInit(): void {
    console.log('arrivals init');
  }

  readArrival(){
    this.arrivalService.getArrivals().subscribe((data) => {
     this.Arrival = data;
    })    
  }

  removeArrival(arrival, index) {
    if(window.confirm('Are you sure?')) {
        this.arrivalService.deleteArrival(arrival._id).subscribe((data) => {
          this.Arrival.splice(index, 1);
        }
      )    
    }
  }

}
