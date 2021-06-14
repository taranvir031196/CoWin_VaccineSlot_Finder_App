import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VaccineService } from '../services/vaccine.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

public  data : any = [];

  constructor() { 
  }

  ngOnInit( ) {

  }

  // getResultsViaDistrict_id(districtId, date){
  //   this.vaccineservice.getVaccineSlotsByDistrict(districtId, date);
  //   console.log("These are the results");
  //   console.log(this.data);
  // }
  

}
