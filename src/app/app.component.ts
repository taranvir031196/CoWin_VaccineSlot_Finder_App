import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertController, IonRouterOutlet, Platform } from '@ionic/angular';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ ViewChild(IonRouterOutlet, {static: true}) routerOutlet: IonRouterOutlet;
  constructor(private platform: Platform, private alertController: AlertController, private location:Location) {
    this.backbuttonEvent();
  }

  backbuttonEvent() {
      this.platform.backButton.subscribeWithPriority(0, () => {
        if(!this.routerOutlet.canGoBack()){
        this.backButtonAlert();
        }else{
          this.location.back();
       }
   });
}

  async backButtonAlert() { 
    const alert = await this.alertController.create({
        message:"You just pressed the Back Button!",
        buttons:[{
          text:'Cancel',
          role:'cancel'
        },{
          text: 'Close App',
          handler:()=>{
            navigator['app'].exitApp();
          }
        }]
    });
    await alert.present();
  }
}

