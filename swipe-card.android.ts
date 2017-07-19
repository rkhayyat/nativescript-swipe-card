// import { Common, SwipeCardBase, itemsProperty, heightProperty,widthProperty } from './swipe-card.common';
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

   i: number = 0;
   public layoutHeight: Number;
   public layoutWidth: Number;
   public layoutBorderRadius: Number;
   public layoutBorderWidth:Number;


    [itemsProperty.setNative](value: Layout[]) {       
        let items: Layout[] = value;
        this.createItems(items, this.layoutHeight, this.layoutWidth, this.layoutBorderRadius, this.layoutBorderWidth);
    };


//    [heightProperty.setNative](value: number) {       
//         this.heightPer = value;        
//     }

//    [widthProperty.setNative](value: number) {       
//         this.widthPer = value;        
//     }

   constructor() {
            super();
    }
 
    // public onLoaded() {
    //         super.onLoaded();
            
    // }


    createItems(items, layoutHeight, layoutWidth, layoutBorderRadius, layoutBorderWidth){     
            this.horizontalAlignment="center"; 
            this.top =30;
            this.borderWidth=2;
            this.borderColor = new Color("blue");
            // this.width = screen.mainScreen.widthDIPs;
            // this.height = screen.mainScreen.heightDIPs;
            for (var key in items) {
                     this.handleSwipe(key,items[key], layoutHeight, layoutWidth, layoutBorderRadius, layoutBorderWidth);
            }
    }

    handleSwipe(key: any, layout:Layout, layoutHeight:number, layoutWidth:number, layoutBorderRadius:number, layoutBorderWidth:number) {       
            this.i--;
            let prevDeltaX:number =0;
            let prevDeltaY:number =0;
            layout.backgroundColor = new Color(randomColor());
            layout.margin = 2;
            layout.color = new Color("#000000");            
            layout.borderRadius = layoutBorderRadius;
            layout.borderWidth=layoutBorderWidth;
            layout.borderColor = new Color("#000000");
            let width = this.width["value"]*screen.mainScreen.widthDIPs, height = this.height["value"]*screen.mainScreen.heightDIPs;
            layout.width =  width*layoutWidth/100;
            layout.height =  height*layoutHeight/100;
            layout.left= (this.width["value"]*screen.mainScreen.widthDIPs-layout.width)/2;
            layout.top=(this.height["value"]*screen.mainScreen.heightDIPs-layout.height)/4;
            layout.id = 'card' + Number(key);
            layout.marginTop = this.i*5;
            this.addChild(layout);
            //make card swipable
            let that = new WeakRef(this);
        
        layout.on(GestureTypes.pan, (args: PanGestureEventData) => {
            if (args.state === 1) // down
            {
                prevDeltaX = 0;
                prevDeltaY = 0;
            }
            else if (args.state === 2) { // currently paning
                layout.translateX += args.deltaX - prevDeltaX;
                layout.translateY += args.deltaY - prevDeltaY;
                prevDeltaX = args.deltaX;
                prevDeltaY = args.deltaY;
            } 
            else if (args.state === 3) // up
            {                                
                let currLocationX = layout.getLocationOnScreen().x-(screen.mainScreen.widthDIPs-<number>layout.width)/2;
                let isToLeft:boolean;
                let swipeX:number;                
                if (currLocationX<0) {
                    currLocationX = currLocationX*(-1);
                    isToLeft = true;
                }

                let shiftX = (this.width["value"]*screen.mainScreen.widthDIPs) - currLocationX;
                let movPerc = shiftX/(this.width["value"]*screen.mainScreen.widthDIPs);
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
                    layout.animate({
                        translate: {
                            x:swipeX,
                            y:0
                        },
                        duration: 500            
                    });


                } else {
                    layout.animate({
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