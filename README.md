# Nativescript Swipe Card plugin
This plugin is inspired by https://www.nativescript.org/blog/tinder-style-cards-with-nativescript---love-at-first-swipe

# Usage
## Android
### Typescript
```
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
```
### XML
```
<Page xmlns="http://schemas.nativescript.org/tns.xsd" 
      xmlns:customControls="nativescript-swipe-card"
      loaded="pageLoaded" class="page">
    <StackLayout>
        <customControls:SwipeCard id="swipe" items="{{ items }}"/>
  </StackLayout>
</Page>
```
