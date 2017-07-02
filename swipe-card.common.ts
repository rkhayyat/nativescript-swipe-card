import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'application';
import * as dialogs from 'ui/dialogs';
import {StackLayout} from "tns-core-modules/ui/layouts/stack-layout";
import {Label} from "tns-core-modules/ui/label";
import {Button} from "tns-core-modules/ui/button";
import {AbsoluteLayout} from "tns-core-modules/ui/layouts/absolute-layout";
import { Property } from "tns-core-modules/ui/core/properties";
import { View } from "tns-core-modules/ui/core/view";

export class Common extends Observable {
  public message: string;
  public version: string;

  constructor() {
    super();
    this.message = Utils.SUCCESS_MSG();
    this.version ='0';
  }
}

export class SwipeCardBase extends  AbsoluteLayout {
}

export const itemsProperty = new Property<SwipeCardBase, any[]>({
    name: "items",
    equalityComparer: (a: any[], b: any[]) => !a && !b && a.length === b.length
});
itemsProperty.register(SwipeCardBase);


export class Utils {
  public static SUCCESS_MSG(): string {
    let msg = `Your plugin is working on ${app.android ? 'Android' : 'iOS'}.`;

    return msg;
  }

}