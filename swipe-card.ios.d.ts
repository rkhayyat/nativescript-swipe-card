import { Common, SwipeCardBase } from './swipe-card.common';
import { Layout } from "tns-core-modules/ui/layouts/layout";
export declare class Myplugin extends Common {
    constructor();
}
export declare class SwipeEvent {
    eventName: string;
    object: any;
    direction: number;
    cardIndex: number;
}
export declare class SwipeCard extends SwipeCardBase {
    static swipeEvent: string;
    i: number;
    cardHeight: Number;
    cardWidth: Number;
    cardBorderRadius: Number;
    cardBorderWidth: Number;
    isRandomColor: Boolean;
    constructor();
    createItems(items: any, layoutHeight: any, layoutWidth: any, layoutBorderRadius: any, layoutBorderWidth: any, isRandomColor: any): void;
    handleSwipe(key: any, layout: Layout, layoutHeight: number, layoutWidth: number, layoutBorderRadius: number, layoutBorderWidth: number, isRandomColor: Boolean): void;
}
