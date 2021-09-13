# CarouselGenerator

A Javascript Template to generate carousels simply

# Instructions

* Add the 'JCarousel' folder to your project
* Import the JCarousel.js file into your HTML file by using standard ```<script>``` tag imports
  
  Example:
    ```html
    <script defer src="JCarousel/mainCode/JCarousel.js"></script>
    ```

* Make a new JavaScript file to execute the functions needed to create a Carousel

  Example:
  ```html
  <script defer src="JCarousel/carouselCreator.js"></script>
  ```

* Call the ```JCarousel()``` function with an object 

  Example:
  ```javascript
    JCarousel({
        //Data goes here
    })
  ```

* Add atleast the [Minimum Required Parameters](#-minimum-required-parameters)



# Minimum Required Parameters

* Width
* Height
* A Target Element (Where the Carousel will generate)
* An ```elements:[]``` with atleast two objects inside


