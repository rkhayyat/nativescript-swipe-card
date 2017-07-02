import { Common, SwipeCardBase } from './swipe-card.common';
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
    cards: Number[];
    i: number;
    constructor();
    createItems(items: any): void;
    handleSwipe(key: any): void;
}
