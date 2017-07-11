import { Common, SwipeCardBase } from './swipe-card.common';
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
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
    cards: StackLayout[];
    i: number;
    constructor();
    createItems(items: any): void;
    handleSwipe(key: any, stack: StackLayout): void;
}
