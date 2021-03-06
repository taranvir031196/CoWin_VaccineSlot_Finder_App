import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Districts } from '../interfaces/districts';
import { finalize, map } from 'rxjs/operators';
import { promise } from 'selenium-webdriver';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ResultsPage } from '../results/results.page';
//import {HTTP} from '@ionic-native/http/ngx';
import { HTTP } from '@ionic-native/http/ngx';


@Injectable({
  providedIn: 'root'
})


export class VaccineService implements OnInit {

  public loaded: boolean = false;
  private url:string = "https://maximal-quanta-316115.el.r.appspot.com";
  private CALENDAR_BY_DISTRICT: string= "/calendarByDistrict";
  private CALENDAR_BY_PINCODE: string= "/calendarByPin";
  data: Object;
  public result = [];
  mylist:string;

  
  constructor(private http: HTTP, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private plt: Platform, private router: Router, private iab: InAppBrowser, private res : ResultsPage ) {

  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async getVaccineSlotsByDistrict(district_id, date){
    let loading = await this.loadingCtrl.create({
      message: "Please wait trying to fetch your results"
    });
    await loading.present();

    if(district_id != null || district_id !=undefined){  
    this.http.get(this.url+this.CALENDAR_BY_DISTRICT+ '?'+ 'district_id=' + district_id +'&'+ 'date=' + date, {}, {}).then(async data=>{
      await loading.dismiss();
    //  this.result = JSON.stringify(data);

      const alert = await this.alertCtrl.create({
        header: 'Results',
        cssClass: 'my-custom-alert',
        subHeader: 'Hooray! Results fetched as per your requirement',  
        message: JSON.stringify(data.data),
        buttons: [
        {
          text: "BOOK NOW",
          handler: () =>{
            this.iab.create(`https://www.cowin.gov.in/home/`, `_blank`);    
          }
        },
        {
          text: 'OK'
        }
      ]
});
  console.log(data);
  await alert.present()    
},async err=>{
      await loading.dismiss();
      const alert = await this.alertCtrl.create({
          header: 'Error',
          message: "Sorry Cannot Fetch any results at this moment. Please try again later!",
          buttons: ['OK']
      });
      console.log(err);
      await alert.present()
    });
  }else{
    await loading.dismiss();
    const alert = this.alertCtrl.create({
      header: 'Need Your Attention!!',
      cssClass: 'my-important-alert',
      message: "Please Select State and district as per your requirememt first!",
      buttons: [
      {
        text: 'LetMeCorrect'
      }
    ]
  }).then(alert=>{
    alert.present();
      });
    }
}

  async getVaccineSlotsByPincode(pincode, date){
    let loading = await this.loadingCtrl.create({
      message: "Please wait trying to fetch your results"
    });
    await loading.present();

    if(pincode!=null || pincode!=undefined){

    this.http.get(this.url+this.CALENDAR_BY_PINCODE+ '?'+ 'pincode=' + pincode +'&'+ 'date=' + date, {}, {}).then(async data=>{
      await loading.dismiss();
      const alert = await this.alertCtrl.create({
        header: 'Results',
        cssClass: 'my-custom-alert',
        subHeader:"Hooray! Results fetched as per your requirement",
        message:  JSON.stringify(data.data),
        buttons: [
        {
          text: "Book Now",
          handler: () =>{
            this.iab.create(`https://www.cowin.gov.in/home/`, `_blank`);    
            console.log("Landed on the results page");
          }
        },
        {
          text: 'OK'
        }
        ]
      });
      console.log(data);
      await alert.present()
    }, async err=>{
      await loading.dismiss();
      const alert = await this.alertCtrl.create({
          header: 'Error',
          message: "Sorry Cannot Fetch any results at this moment. Please try again later!",
          buttons: ['OK']
      });
      console.log(err);
      await alert.present()
    });
  }else{
    await loading.dismiss();
    const alert = this.alertCtrl.create({
      header: 'Need Your Attention!!',
      message: "Please Enter the Pincode first!",
      buttons: [
      {
        text: 'LetMeCorrect'
      }
    ]
  }).then(alert=>{
    alert.present();
        });
      }
    }
}