import { Common, SwipeCardBase, itemsProperty } from './swipe-card.common';
import { android as androidApplication } from 'application';
import { GesturesObserver, GestureTypes, SwipeGestureEventData, GestureEventData, TouchGestureEventData, PanGestureEventData, SwipeDirection } from "tns-core-modules/ui/gestures/gestures";
import {Layout} from "tns-core-modules/ui/layouts/layout";
import {StackLayout} from "tns-core-modules/ui/layouts/stack-layout";
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
   public cards: Layout[];
   i: number = 0;
   [itemsProperty.setNative](value: Layout[]) {       
        let items: Layout[] = value;
        this.cards = items;
        this.createItems(items);
    }

   constructor() {
            super();
    }

    createItems(items){
            this.horizontalAlignment="center"; 
            this.paddingTop =30;
            for (var key in this.cards) {
                     this.handleSwipe(key,this.cards[key]);
            }
    }

    handleSwipe(key: any, stack:Layout) {       
            this.i--;
            let prevDeltaX:number =0;
            let prevDeltaY:number =0;
            stack.backgroundColor = new Color(randomColor());
            stack.margin = 2;
            stack.verticalAlignment = "middle";
            stack.color = new Color("#000000");
            let width = screen.mainScreen.widthDIPs, height = screen.mainScreen.heightDIPs;
            stack.height =  height/2;
            stack.width =  width;
            stack.id = 'card' + Number(key);
            stack.marginTop = this.i;
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