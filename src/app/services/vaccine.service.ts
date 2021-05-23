import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Districts } from '../interfaces/districts';
import { map } from 'rxjs/operators';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})

export class VaccineService implements OnInit {

  public loaded: boolean = false;
  private url:string = "https://cdn-api.co-vin.in/api/v2";
  private CALENDAR_BY_DISTRICT: string= "/appointment/sessions/public/calendarByDistrict";
  private CALENDAR_BY_PINCODE: string= "/v2/appointment/sessions/public/findByPin";

  
  constructor(private http: HttpClient) {

  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getVaccineSlotsByPincode(pincode, date){
    return new Promise(resolve=> {
    return this.http.get(this.url+this.CALENDAR_BY_PINCODE+ '?'+ 'pincode=' + 'date=' + date).subscribe(data=>{
      resolve(data);
    }, err=>{
      console.log(err);
    });
  });
}

getVaccineSlotsByState(){
  
}


}
