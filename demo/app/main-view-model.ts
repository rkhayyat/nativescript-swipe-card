import {Observable} from 'tns-core-modules/data/observable';
import {Myplugin} from 'nativescript-swipe-card';

export class HelloWorldModel extends Observable {
  public message: string;
  public version: string;
  public items:Number[]= [1,2,3,4,5,7,9,10,11,22,69,66,6];
  private myplugin: Myplugin;

  constructor() {
    super();
    this.myplugin = new Myplugin();
    this.message = this.myplugin.message;
    this.version = this.myplugin.version;
  }
  
}