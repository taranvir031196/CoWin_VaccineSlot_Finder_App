import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
 
  constructor(private router: Router, private iab: InAppBrowser) { }

  ngOnInit() {

  }

  navigateToVaccineSlotPage(){
    this.router.navigate(['home']);
  }

  openCowinPortal(){

    this.iab.create(`https://www.cowin.gov.in/home/`, `_blank`);    

 }
}
