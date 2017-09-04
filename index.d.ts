import { Common } from './swipe-card.common';
export declare class Myplugin extends Common {
  // define your typings manually
  // or..
  // use take the ios or android .d.ts files and copy/paste them here
}
export declare interface SwipeEvent   {
      eventName: string,
      object: any,
      direction:number,
	  cardIndex:number;
}