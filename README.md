# CarouselGenerator

A Javascript Template to generate carousels simply


# Documentation Sections

[Instructions](#Instructions)
[Minimum Required Parameters](#minimum-required-parameters)
[Parameters](#Parameters)
[Adding Box Content - Parameters](#Adding-Box-Content---Parameters)
[Adding Box Content - Parameters Example](#Adding-Box-Content---Parameters-Example)
[Adding Box Content - Content](#Adding-Box-Content---Content)
[Adding Box Content - Content Example](#Adding-Box-Content---Content-Example)
[Completed Full Example](#Completed-Full-Example)






# Instructions

* Add the 'JCarousel' folder to your project
* Import the JCarousel.js file into your HTML file by using standard html ```<script>``` tag imports
  
  Example:
    ```html
    <script defer src="JCarousel/mainCode/JCarousel.js"></script>
    ```

* Make a new JavaScript file to execute the functions needed to create a Carousel

  Example:
  ```html
  <script defer src="JCarousel/carouselCreator.js"></script>
  ```

* Call the `JCarousel()` function with an object 

  Example:
  ```javascript
    JCarousel({
        //Data goes here
    })
  ```

* Add atleast the [Minimum Required Parameters](#minimum-required-parameters)
* Add a `content:[]` to the object(s) in `elements:[]`. Add objects inside of Content using [Adding Box Content](#adding-box-content).
* Add other parameters as needed from [Parameters](#parameters)



# Minimum Required Parameters




* **width:**

  This is the width of the Carousel. This value can be given in the same way as it is done in CSS
  *e.g em, px, %, vw*

  Example:
  ```javascript
  width: 100%
  ```





* **height:**

  This is the width of the Carousel. This value can be given in the same way as it is done in CSS
  *e.g em, px, %, vw*

  Example:
  ```javascript
  height: 300px
  ```





* **targetElement**

  This is where the Carousel will be generated / inserted

  Example:
  ```javascript
  target: 'TargetElement'
  ```

  ** ⚠️ IMPORTANT ⚠️ **
    
    The `target:` only accepts **HTML ID Tags**, not class tags

    ***************************




* An `elements:[]` with atleast two objects inside

  The `elements:[]` is where you put objects relating to each individual box in the Carousel.

# Parameters

** ⚠️ This section does not cover the [Minimum Required Parameters](#minimum-required-parameters) ⚠️ **

* **animationType:**

    This controls if the Animation is automatically or manually controlled

    Possible Options:
    ```javascript
    animationType: 'auto'
    animationType: 'manual'
    ```

    ** ⚠️ PLEASE NOTE ⚠️**

    Currently `animationType: "manual" is not functional. This is a planned future implementation

* **animationPause:**

  This controls how long is spent waiting before the next element slides into the scene. You give this amount in seconds

  Example:
  ```javascript
  animationPause: 5 // 5 Seconds
  ```

* **animationDuration**

  This works in a similar way to `animationPause:`. This controls how long it takes for items to animate in and out. The amount is given in seconds.

  Example:
  ```javascript
  animationDuration: 3 // 3 Seconds
  ```

* **animationDirection**

  ** ⚠️ WARNING ⚠️ **

  *This is a future feature in development. Therefore it has no affect on anything at the moment. The animation only runs in its default direction until the others are implemented*

  Animation Direction controls which way the Animation animates.

  Example:
  ```javascript
  animationDirection: 'default'
  animationDirection: 'left' // Default
  animationDirection: 'right'
  animationDirection: 'up'
  animationDirection: 'down'
  ```

* **warnings**

  This controls whether or not you see warnings in the Console *(e.g Using `backgroundColor` and `backgroundImage` at the same time will cause a warning)*

  Example:
  ```javascript
  warnings:false
  warnings:true
  ```

# Adding Box Content - Parameters

For information about the Content parameters, [Go to "Adding Box Content - Content"](#Adding-Box-Content---Content)

To see a finished example of Box Parameters *( without content)*, [Go to "Adding Box Content - Parameters Example](#Adding-Box-Content---Parameters-Example)

* **backgroundImage**

  This allows you to give an image as the background to the box. **This input uses an array**

  Example:
  ```javascript
  backgroundImage: ['photo', 'Alt Text']
  ```

* **backgroundColor**

  This allows you to set a colored background to the box. It accepts CSS Values

  Example:
  ```javascript
  backgroundColor: 'rgba(0,255,0)'
  backgroundColor: 'red'
  ```

  ** ⚠️ Important ⚠️ **

  This does not work at the same time as `backgroundImage`. Using both at the same time will return a warning if warnings are enabled

* **backgroundDim**

  If added, this adds a box ontop of the image but behind the text. Its intended purpose is to darken the image in order to see the text more clearly. It uses CSS Values *(Make sure to use a CSS Value with Alpha channel control)*

  Example:
  ```javascript
  backgroundDim: 'rgba(0,0,0,0.5)'
  ```

* **contentAlignment**

  This controls how the content inside of the box is aligned. 
  
  It is entered as `(horizontal) (vertical)`. 
  *Do not put extra spaces as it may not work*

  The first part is for horizontal control
  The second part is for vertical control

  Accepted values are `left`, `center` and `right`

* **boxPadding**

  This controls how much space there is from the content and the outer edges of the box. 

  It is entered as `(horizontal) (vertical)`
  *Do not put extra spaces as it may not work*

  The first part is for horizontal control
  The second part is for vertical control

  ⚠️ Accepted Values: `px` and `em`
  
     At present, these are the only accepted values. More may be supported in the future

# Adding Box Content - Parameters Example

```javascript
backgroundImage: ['photo-1.jfif', 'altText'], 
backgroundColor: 'rgba(255,0,0)',
backgroundDim: "rgba(0,0,0,0.5)",  
contentAlignment: "center center",
boxPadding: "10px 15px",
content:[]
```

# Adding Box Content - Content

To see what a `content:[]` looks like completed, [Go To Adding Box Content - Content Example](#Adding-Box-Content---Content-Example)

* Inside of Objects created within the `content:[]` of `elements:[]`. You can use these parameters in order to add content to the Carousel box

* **contentType**
  
  `contentType:` is where you specify what element you would like to place inside of the box, this can be any HTML Element. ***Although the HTML element may not be fully supported to work with the Carousel Box***

  Example:
  ```javascript
  {contentType: 'h1'}
  ```

* **contentInnerHTML**
  
  `contentInnerHTML:` is where you can specify what the innerHTML of the element contains. ***As with `contentType:`, full support of features is not guranteed at the moment***

  Example:
  ```javascript
  {contentInnerHTML:'Hello World'}
  ```

* **color**

  `color:` can be used to specify the color of a element. This can be used like a CSS Value
  
  Example:
  ```javascript
  {color: 'white'}
  {color: 'rgb(255,0,0)'}
  ```

* **background**

  `background:` can be used in the same was color. It can be controlled like a CSS Value

  Example:
  ```javascript
  {background: 'red'}
  {background: 'rgb(0,255,0)'}
  ```

* **href**

  `href:` can be used on items with `contentType:'a'`. This allows you to specify a link for the tag when clicked

  Example:
  ```javascript
  {href: 'https://www.google.co.uk'}
  ```

* **Classes / ID's**

  The `class:` can be used to give Elements within the box a custom class tag. This may be used to carry out styling via CSS

  A Custom ID tag can also be assinged to the element using `id:`.

  *This only works with elements inside of the `content:[]` boxes. As items outside of the content of the boxes may have Classes or ID's which are needed for the Carousel to function*

  Example:
  ```javascript
  {class:'aClass'}
  {id:'a-Id'}
  ```

# Adding Box Content - Content Example

```javascript
content:[
    {contentType: "h1", contentInnerHTML: "0", class:"carouselText", color: "white" ,id:"carouselId"},
    {contentType: "a", contentInnerHTML: "applyNow", href: "https://github.com", class:"carouselText", color: "white"}
], 
```

# Completed Full Example

```javascript
{
    width: '100%',
    height: '300px',
    target: 'targetElement',
    animationType: "auto",
    animationPause: 5,
    animationDuration: 3,
    animationDirection: 'default',
    elements:[
        {
            backgroundImage: ['photo', 'altText'], 
            backgroundColor: 'rgba(255,0,0)',
            backgroundDim: "rgba(0,0,0,0.5)",  
            contentAlignment: "center center",
            boxPadding: "10px 15px",
            content:[
                {contentType: "h1", contentInnerHTML: "0", class:"carouselText", color: "white" ,id:"carouselId"},
                {contentType: "a", contentInnerHTML: "applyNow", href: "https://github.com", class:"carouselText", color: "white"}
            ],  
        },
        {
            backgroundImage: ['photo', 'altText'], 
            backgroundColor: 'rgba(0,255,0)',
            backgroundDim: "rgba(0,0,0,0.5)", 
            contentAlignment: "center center",
            boxPadding: "10px 15px",
            content:[
                {contentType: "h1", contentInnerHTML: "1", class:"carouselText",id:"carouselId",color: 'white'},
                {contentType: "a", contentInnerHTML: "applyNow", href: "https://github.com", class:"carouselText", color: "white"}
            ],  
        },
    ]
}


  





