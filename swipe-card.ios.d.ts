import { Common, SwipeCardBase } from './swipe-card.common';
import { Layout } from "tns-core-modules/ui/layouts/layout";
export declare class Myplugin extends Common {
    constructor();
}
export declare class SwipeEvent {
    eventName: string;
    object: any;
    direction: number;
}
export declare class SwipeCard extends SwipeCardBase {
    static swipeEvent: string;
    i: number;
    layoutHeight: Number;
    layoutWidth: Number;
    layoutBorderRadius: Number;
    layoutBorderWidth: Number;
    constructor();
    createItems(items: any, layoutHeight: any, layoutWidth: any, layoutBorderRadius: any, layoutBorderWidth: any): void;
    handleSwipe(key: any, layout: Layout, layoutHeight: number, layoutWidth: number, layoutBorderRadius: number, layoutBorderWidth: number): void;
}
