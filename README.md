[![npm](https://img.shields.io/npm/v/nativescript-swipe-card.svg)](https://www.npmjs.com/package/nativescript-swipe-card)
[![npm](https://img.shields.io/npm/dt/nativescript-swipe-card.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-swipe-card)

[![NPM](https://nodei.co/npm/nativescript-swipe-card.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nativescript-swipe-card/)

# Nativescript Swipe Card plugin
This plugin is inspired by https://www.nativescript.org/blog/tinder-style-cards-with-nativescript---love-at-first-swipe

# Nativescript-swipe-card

Tender cards, allow you to drag them, and detect swipe events. 

Developed with :heart: by the team [NativeBaguette 🥖](https://www.nativescript.org/blog/meet-the-nativescript-ambassadors)
<p align="center">
  <img src="https://github.com/rkhayyat/nativescript-swipe-card/blob/master/screenshot/swipeCard.gif" width="400"/>
</p>

## Installation

```javascript
tns plugin add nativescript-swipe-card
```

## Usage 

## Typescript NativeScript

### XML
  
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" 
      xmlns:customControls="nativescript-swipe-card"
      loaded="pageLoaded" class="page">
    <StackLayout>
        <customControls:SwipeCard id="swipe" 
                                  height="90%"
                                  width="80%" 
                                  items="{{ stackCards }}" 
                                  cardHeight="60" 
                                  cardWidth="70"
                                  cardBorderRadius="20"
                                  cardBorderWidth="2"
                                  />
  </StackLayout>
</Page>
```
### main-page

```typescript
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
### main-view-model
```typescript
import {Observable} from 'tns-core-modules/data/observable';
import {Layout} from "tns-core-modules/ui/layouts/layout";
import {StackLayout} from "tns-core-modules/ui/layouts/stack-layout";
import {GridLayout, ItemSpec} from "tns-core-modules/ui/layouts/grid-layout";
import {Label} from "tns-core-modules/ui/label";
import {Image} from "tns-core-modules/ui/image";
import {Button} from "tns-core-modules/ui/button";

export class HelloWorldModel extends Observable {
  public message: string;
  public version: string;
  public stackCards:Layout[];

  constructor() {
    super();

    let Grid = new GridLayout();
    let Label1 = new Label();
    let Label2 = new Label();
    Label1.text = "The Swipable Card plugin";
    Label1.textWrap=true;
    Label2.text = "Welcome to {N} we present you";
    Label2.textWrap=true;
    Grid.addChild(Label1);
    Grid.addChild(Label2);
    // Star and Auto modes for rows behave like corresponding setting for columns but refer to row height.
    var firstRow = new ItemSpec(1, "auto");
    var secondRow = new ItemSpec(1, "auto");
    Grid.addRow(firstRow);
    Grid.addRow(secondRow);
    GridLayout.setRow(Label1,0);
    GridLayout.setRow(Label2,1);


    let stack2 = new StackLayout();
    let image = new Image();
    image.src="~/images/apple.jpg"
    image.height=100;
    image.width=100;
    stack2.verticalAlignment = "middle";
    stack2.addChild(image);
    

    let stack3 = new StackLayout();
    let button = new Button();
    button.text="Click me!";
    button.width=100;
    button.textAlignment = "center";
    stack3.verticalAlignment = "middle";
    stack3.addChild(button);
    this.stackCards = [stack3,stack2,Grid];
  }
  
}
```

## API

### Properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `swipeEvent` | `function` | `null` | Callback called when the layout is swiped to the right or left and the swipe animation is done. |

### Methods

| Method | Return | Description |
| --- | --- | --- |
| `items` | `Array<Layout>` | Array of card's layout, in which we can define the content of each card. |
| `cardHeight` (optional)| `number` | Card's height in percentage of their container's height. |
| `cardWidth` (optional)| `number` | Card's width in percentage of their container's width. |
| `cardBorderRadius` (optional)| `number` | Card's border radius. |
| `cardBorderWidth` (optional)| `number` | Card's border's width. |


## NativeBaguette 🥖

[<img alt="Jean-Baptiste Aniel" src="https://avatars1.githubusercontent.com/u/9477179?v=3&u=bb0e7ce0e5afcfb810e2741921d6e6012423b60f&s=400" width="117">](https://github.com/rhanbIT) | [<img alt="Rachid Al Kayat" src="https://avatars1.githubusercontent.com/u/10686043?v=3&s=400" width="117">](https://github.com/rkhayyat) |[<img alt="triniwiz" src="https://avatars1.githubusercontent.com/u/6695919?v=3&s=400" width="117">](https://github.com/triniwiz) | [<img alt="BradMartin" src="https://avatars1.githubusercontent.com/u/6006148?v=3&s=400" width="117">](https://github.com/bradmartin) | [<img alt="JenLooper" src="https://avatars1.githubusercontent.com/u/1450004?v=3&s=400" width="117">](https://github.com/jlooper) |
:---: |:---: |:---: |:---: |:---: |
[rhanb](https://github.com/rhanbIT) | [rkhayyat](https://github.com/rkhayyat)  |[triniwiz](https://github.com/triniwiz) |[bradmartin](https://github.com/bradmartin) |[jlooper](https://github.com/jlooper) |

