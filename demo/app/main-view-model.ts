import {Observable} from 'tns-core-modules/data/observable';
import {Myplugin} from 'nativescript-swipe-card';
import {Layout} from "tns-core-modules/ui/layouts/layout";
import {StackLayout} from "tns-core-modules/ui/layouts/stack-layout";
import {GridLayout, ItemSpec} from "tns-core-modules/ui/layouts/grid-layout";
import {Label} from "tns-core-modules/ui/label";
import {Image} from "tns-core-modules/ui/image";
import {Button} from "tns-core-modules/ui/button";

export class HelloWorldModel extends Observable {
  public message: string;
  public version: string;
  public stackItems:Layout[];
  
  private myplugin: Myplugin;
  constructor() {
    super();
    this.myplugin = new Myplugin();
    this.message = this.myplugin.message;
    this.version = this.myplugin.version;


    let Grid = new GridLayout();
    let Label1 = new Label();
    let Label2 = new Label();
    Label1.text = "The Swipable Card plugin";
    Label1.textWrap=true;
    Label2.text = "Welcome to {N} we present you";
    Label2.textWrap=true;
    Grid.addChild(Label1);
    Grid.addChild(Label2);
    // Label1.textAlignment = "center";
    // Label2.textAlignment = "center";
    // // Grid.verticalAlignment = "middle";
    // Grid.set("Label1", 1);
    // Star and Auto modes for rows behave like corresponding setting for columns but refer to row height.
    var firstRow = new ItemSpec(1, "auto");
    var secondRow = new ItemSpec(1, "auto");
    Grid.addRow(firstRow);
    Grid.addRow(secondRow);


    let stack2 = new StackLayout();
    let image = new Image();
    image.src="~/images/apple.jpg"
    image.height=100;
    image.width=100;
    stack2.verticalAlignment = "middle";
    stack2.addChild(image);
    

    let stack3 = new StackLayout();
    let button = new Button();
    button.text="Click me!";
    button.width=100;
    button.textAlignment = "center";
    stack3.verticalAlignment = "middle";
    stack3.addChild(button);


    this.stackItems = [stack3,stack2,Grid];

            

    
  }
  
}