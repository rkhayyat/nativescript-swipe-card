import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import {HelloWorldModel} from './main-view-model';
import {SwipeEvent} from 'nativescript-swipe-card';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();

    let swipeCard = page.getViewById("swipe");
    // swipeCard.items = [1,2,3,4,5];
    swipeCard.on("swipeEvent", (args:SwipeEvent) => {
        console.log(args.direction);
        if (args.direction === 1) {
                    //right
                    console.log('Swiped to right');
        } else {
                    //left
                    console.log('Swiped to left');
        }
    });
}