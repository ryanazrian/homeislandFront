import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { ListhomePage } from '../homestay/homestay';
import { HomestayPage } from '../homestay/homestay';
/**
 * Generated class for the ListhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listhome',
  templateUrl: 'listhome.html',
})
export class ListhomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListhomePage');
  }

  homestaylog(){
  	this.navCtrl.push(HomestayPage);
  }

}
