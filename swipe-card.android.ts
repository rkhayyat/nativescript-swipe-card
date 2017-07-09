import { Common, SwipeCardBase, itemsProperty } from './swipe-card.common';
import { android as androidApplication } from 'application';
import { GesturesObserver, GestureTypes, SwipeGestureEventData, GestureEventData, TouchGestureEventData, PanGestureEventData, SwipeDirection } from "tns-core-modules/ui/gestures/gestures";
import {StackLayout} from "tns-core-modules/ui/layouts/stack-layout";
import {Label} from "tns-core-modules/ui/label";
import {Button} from "tns-core-modules/ui/button";
import { Color } from "color/color";
import { screen } from "tns-core-modules/platform";

export class Myplugin extends Common {
    constructor(){
        super();
        this.message = androidApplication.context.getPackageName();
         var PackageManager = android.content.pm.PackageManager;
         var pkg = androidApplication.context.getPackageManager().getPackageInfo(androidApplication.context.getPackageName(), PackageManager.GET_META_DATA);
        this.version = pkg.versionName;
    }
}

export class SwipeEvent {
    eventName: string;
    object: any;
    direction:number
} 

 function randomColor():string {
    var color = "";
    var Colors =  [ "lightblue",
                    "#FAEEC3",
                    "lightcyan",
                    "lightgreen",
                    "lavenderblush",
                    "lightyellow",
                    "palevioletred",
                    "royalblue",
                    "rosybrown",
                    "lawngreen",
                    "lightcoral",
                    "#FF6347",
                    "mediumpurple",
                    "burlywood",
                    "chocolate",
                    "sandybrown",
                    "chartreuse",
                    "peru",
                    "thistle",
                    "forestgreen",
                    "orangered"];
        color = Colors[Math.floor(Math.random() * Colors.length)];
    return color;
}

 export class SwipeCard extends SwipeCardBase {
   public static swipeEvent:string = 'swipeEvent';
   public cards: Number[];
   i: number = 0;
   [itemsProperty.setNative](value: Number[]) {       
        let items: Number[] = value;
        this.cards = items;
        this.createItems(items);
    }

   constructor() {
            super();
    }

    createItems(items){
            this.horizontalAlignment="center"; 
            this.paddingTop =30;
            console.log(this.cards);
            for (var key in this.cards) {
                     this.handleSwipe(key);
            }
    }

    handleSwipe(key: any) {       
            this.i--;
            let prevDeltaX:number =0;
            let prevDeltaY:number =0;

            let stack = new StackLayout();
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
            stack.backgroundColor = new Color(randomColor());
            stack.margin = 2;
            stack.verticalAlignment = "middle";
            stack.color = new Color("#000000");
            let width = screen.mainScreen.widthDIPs, height = screen.mainScreen.heightDIPs;
            stack.height =  height/2;
            stack.width =  width;
            stack.id = 'card' + Number(key);
            stack.marginTop = this.i;
            stack.addChild(Label2);
            stack.addChild(Label1);
            this.addChild(stack);
            //make card swipable
            let that = new WeakRef(this);
        
        stack.on(GestureTypes.pan, (args: PanGestureEventData) => {
            if (args.state === 1) // down
            {
                prevDeltaX = 0;
                prevDeltaY = 0;
            }
            else if (args.state === 2) { // currently paning
                stack.translateX += args.deltaX - prevDeltaX;
                stack.translateY += args.deltaY - prevDeltaY;
                prevDeltaX = args.deltaX;
                prevDeltaY = args.deltaY;
            } 
            else if (args.state === 3) // up
            {

                let currLocationX = stack.getLocationOnScreen().x;
                let isToLeft:boolean;
                let swipeX:number;                
                if (currLocationX<0) {
                    currLocationX = currLocationX*(-1);
                    isToLeft = true;
                }
                let shiftX = <number>stack.width - currLocationX;
                let movPerc = shiftX/<number>stack.width;
                if (movPerc < 0.5)  {
                    let eventData:SwipeEvent = {
                        eventName: SwipeCard.swipeEvent,
                        object: this,
                        direction:isToLeft?2:1
                    }
                    if (isToLeft) {
                        swipeX = -2000;
                        this.notify(eventData);
                        
                    }
                    else {
                        swipeX = 2000;
                        this.notify(eventData);
                    }
                    stack.animate({
                        translate: {
                            x:swipeX,
                            y:0
                        },
                        duration: 500            
                    });


                } else {
                    stack.animate({
                        translate: {
                            x:0,
                            y:0
                        },
                        duration: 500
                    });
                }

            }
        });
    }  
 }







