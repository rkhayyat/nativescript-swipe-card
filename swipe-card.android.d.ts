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
    cards: Layout[];
    i: number;
    constructor();
    createItems(items: any): void;
    handleSwipe(key: any, stack: Layout): void;
}
