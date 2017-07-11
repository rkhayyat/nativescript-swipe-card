import {Observable} from 'tns-core-modules/data/observable';
import {Myplugin} from 'nativescript-swipe-card';
import {StackLayout} from "tns-core-modules/ui/layouts/stack-layout";
import {Label} from "tns-core-modules/ui/label";
import {Image} from "tns-core-modules/ui/image";
import {Button} from "tns-core-modules/ui/button";

export class HelloWorldModel extends Observable {
  public message: string;
  public version: string;
  public items:Number[]= [1,2,3,4,5,7,9,10,11,22,69,66,6];
  public stackItems:StackLayout[];
  
  private myplugin: Myplugin;

  constructor() {
    super();
    this.myplugin = new Myplugin();
    this.message = this.myplugin.message;
    this.version = this.myplugin.version;


    let stack1 = new StackLayout();
    let Label1 = new Label();
    let Label2 = new Label();
    //set the Labels on the card
    Label1.text = "The Swipable Card plugin";
    Label1.textWrap=true;
    Label2.text = "Welcome to {N} we present you";
    Label2.textWrap=true;
    //android specific
    Label1.textAlignment = "center";
    Label2.textAlignment = "center";
    stack1.margin = 2;
    stack1.verticalAlignment = "middle";
    stack1.addChild(Label2);
    stack1.addChild(Label1);
    


    let stack2 = new StackLayout();
    let image = new Image();
    image.src="~/images/apple.jpg"
    image.height=100;
    image.width=100;
    //set the Labels on the card
    stack2.margin = 2;
    stack2.verticalAlignment = "middle";
    stack2.addChild(image);
    

    let stack3 = new StackLayout();
    let button = new Button();
    button.text="Click me!";
    button.width=100;
    //set the Labels on the card
    
    //android specific
    button.textAlignment = "center";
    stack3.margin = 2;
    stack3.verticalAlignment = "middle";
    stack3.addChild(button);
    this.stackItems = [stack3,stack2,stack1];

            

    
  }
  
}