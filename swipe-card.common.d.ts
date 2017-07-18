import { Observable } from 'tns-core-modules/data/observable';
import { AbsoluteLayout } from "tns-core-modules/ui/layouts/absolute-layout";
import { Property } from "tns-core-modules/ui/core/properties";
export declare class Common extends Observable {
    message: string;
    version: string;
    constructor();
}
export declare class SwipeCardBase extends AbsoluteLayout {
}
export declare const itemsProperty: Property<SwipeCardBase, any[]>;
export declare const heightProperty: Property<SwipeCardBase, any[]>;
export declare const widthProperty: Property<SwipeCardBase, any[]>;
export declare class Utils {
    static SUCCESS_MSG(): string;
}
