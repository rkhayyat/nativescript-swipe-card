# Nativescript Swipe Card plugin
This plugin is inspired by https://www.nativescript.org/blog/tinder-style-cards-with-nativescript---love-at-first-swipe

# Nativescript-swipe-card

Tender cards, allow you to drag them, and detect swipe events. 

Developed with :heart: by the team NativeBaguette 🥖

## Installation

```javascript
tns plugin add nativescript-swipe-card
```

## Usage 

## Typescript NativeScript

  
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" 
      xmlns:customControls="nativescript-swipe-card"
      loaded="pageLoaded" class="page">
    <StackLayout>
        <customControls:SwipeCard id="swipe" items="{{ items }}"/>
  </StackLayout>
</Page>
```
### Component

```typescript
import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
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

## API

### Properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `swipeEvent` | `function` | `null` | Callback called when the layout is swiped to the right or left and the swipe animation is done. |


## NativeBaguette 🥖

[<img alt="Rachid Al Kayat" src="https://avatars1.githubusercontent.com/u/10686043?v=3&s=400" width="117">](https://github.com/rkhayyat) | [<img alt="Jean-Baptiste Aniel" src="https://avatars1.githubusercontent.com/u/9477179?v=3&u=bb0e7ce0e5afcfb810e2741921d6e6012423b60f&s=400" width="117">](https://github.com/rhanbIT) | [<img alt="triniwiz" src="https://avatars1.githubusercontent.com/u/6695919?v=3&s=400" width="117">](https://github.com/triniwiz) | [<img alt="BradMartin" src="https://avatars1.githubusercontent.com/u/6006148?v=3&s=400" width="117">](https://github.com/bradmartin) | [<img alt="JenLooper" src="https://avatars1.githubusercontent.com/u/1450004?v=3&s=400" width="117">](https://github.com/jlooper) |
:---: |:---: |:---: |:---: |:---: |
[rkhayyat](https://github.com/rkhayyat) |[rhanb](https://github.com/rhanbIT) |[triniwiz](https://github.com/triniwiz) |[bradmartin](https://github.com/bradmartin) |[jlooper](https://github.com/jlooper) |
