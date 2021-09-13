function moveItemLeft(itemToMove,nextElement){
    console.log("moving")
    itemToMove.style.transform = 'translateX(-100%)'
    nextElement.style.transform = 'translateX(0%)'
}

function moveItemRight(itemToMove,nextElement){
    console.log("moving")
    itemToMove.style.transform = 'translateX(100%)'
    nextElement.style.transform = 'translateX(0%)'
}

// class carouselLoop{
//     constructor(element,identifier){
//         var carouselActive = true
//         while(carouselActive == true){
//             var elements = element.childNodes
//             var totalElements = elements.length
//             var counter = 0;
//             if(counter < totalElements){
//                 console.log(counter)
//                 var currentCounter = counter
//                 var nextCounter = counter++
//                 var prevElement = elements[currentCounter]
//                 var nextElement = elements[nextCounter]
//                 setTimeout(moveItemLeft(prevElement,nextElement),5000)
//                 counter++
//             }else{
//                 var currentCounter = counter
//                 var nextCounter = counter--
//                 var prevElement = elements[currentCounter]
//                 var nextElement = elements[nextCounter]
//                 setTimeout(moveItemRight(prevElement,nextElement),5000)
//             }
//             console.log(elements)

//         }
//     }
// }


function JCarousel(selector)
{

    var carouselIndex = 0;

    var randomIdentifier = Math.floor(Math.random() * 1000000)
    // console.log(randomIdentifier)




    const self = {
        width: selector.width,
        height: selector.height,
        target: selector.target,
        elements: selector.elements,
        animationType: selector.animationType
    }

    // Basic Error Checking

    function errorChecking(){
        if(!selector.width){
            console.error("Width not specified")
        }
        if(!selector.height){
            console.error("Height not specified")
        }
    }

    // Carousel Generator

    var selectedElement = document.getElementById(self.target)
    selectedElement.classList.add("jc-active")
    selectedElement.style.width = self.width
    selectedElement.style.height = self.height
    selectedElement.style.position = "relative"
    selectedElement.style.overflow = "hidden"
    
    selectedElement.id = 'J-Carousel-Identifier-' + randomIdentifier
    selectedElement.setAttribute('data-identifier', randomIdentifier)

    for(const item in self.elements){
        var createdContainer = document.createElement('div')
        createdContainer.classList.add('jc-element')
        selectedElement.appendChild(createdContainer)
        createdContainer.style.width = "100%"
        createdContainer.style.height = "100%"
        createdContainer.style.position = "absolute"
        createdContainer.style.overflow = "hidden"
        createdContainer.setAttribute('data-identifier', randomIdentifier)
        createdContainer.id = randomIdentifier + "-data-order-" + carouselIndex
        createdContainer.style.transition = "1.25s"
        createdContainer.style.transitionProperty = ""
       
       
        var innerFlexContainer = document.createElement('div')
        innerFlexContainer.style.display = "flex"
        innerFlexContainer.style.flexDirection = "column"
        innerFlexContainer.style.gap = "10px"
        innerFlexContainer.style.position = "absolute"
        innerFlexContainer.style.top = "0"
        innerFlexContainer.classList.add("jc-Content-Container")

        if(self.elements[item].boxPadding){
            var splitBoxPadding = self.elements[item].boxPadding.toLowerCase().split(" ")
            for(const pxItem in splitBoxPadding){
                if(splitBoxPadding[pxItem].includes("px")){
                    var splitItemTwo = splitBoxPadding[pxItem].split("px")
                    var parsedIntSplit = parseInt(splitItemTwo[0])
                    // console.log(parsedIntSplit)
                    if(pxItem == 0){
                        var halfedSplit = parsedIntSplit / 2
                        innerFlexContainer.style.width = 'calc(100% - ' + parsedIntSplit + 'px)'
                        innerFlexContainer.style.marginLeft = halfedSplit + 'px'
                    }
                    if(pxItem == 1){
                        var halfedSplit = parsedIntSplit / 2
                        innerFlexContainer.style.height = 'calc(100% - ' + parsedIntSplit + 'px)'
                        innerFlexContainer.style.marginTop = halfedSplit + 'px'
                    }
                }
                if(splitBoxPadding[pxItem].includes("em")){
                    var splitItemTwo = splitBoxPadding[pxItem].split("em")
                    var parsedIntSplit = parseInt(splitItemTwo[0])
                    console.log(parsedIntSplit)
                    if(pxItem == 0){
                        var halfedSplit = parsedIntSplit / 2
                        innerFlexContainer.style.width = 'calc(100% - ' + parsedIntSplit + 'em)'
                        innerFlexContainer.style.marginLeft = halfedSplit + 'em'
                    }
                    if(pxItem == 1){
                        var halfedSplit = parsedIntSplit / 2
                        innerFlexContainer.style.height = 'calc(100% - ' + parsedIntSplit + 'px)'
                        innerFlexContainer.style.marginTop = halfedSplit + 'em'
                    }
                }
            }
        }else{
            innerFlexContainer.style.width = "calc(100% - 20px)"
            innerFlexContainer.style.height = "calc(100% - 20px)"
            innerFlexContainer.style.marginTop = "10px"
            innerFlexContainer.style.marginLeft = "10px"
        }


        if(self.elements[item].contentAlignment){
            var splitFlexPresent = self.elements[item].contentAlignment.toLowerCase().split(" ")
            if(splitFlexPresent[0] == "left"){
                innerFlexContainer.style.alignItems = "left"
            }
            if(splitFlexPresent[0] == "right"){
                innerFlexContainer.style.alignItems = "right"
            }
            if(splitFlexPresent[1] == "up"){
                innerFlexContainer.style.justifyContent = "flex-start"
            }
            if(splitFlexPresent[1] == "down"){
                innerFlexContainer.style.justifyContent = "flex-end"
            }
            if(splitFlexPresent[1] == "center"){
                innerFlexContainer.style.justifyContent = "center"
            }
        }

        createdContainer.appendChild(innerFlexContainer)
        
        var backgroundImage = document.createElement('img')
        backgroundImage.style.objectFit = "cover"
        backgroundImage.style.width = "100%"
        backgroundImage.style.height = "100%"
        backgroundImage.style.position = "absolute"
        backgroundImage.style.top = "0"
        backgroundImage.alt = self.elements[item].background[1]
        backgroundImage.src = self.elements[item].background[0]
        backgroundImage.classList.add('JCarouselBackground')
        backgroundImage.zIndex = 2
        createdContainer.appendChild(backgroundImage)


        if(self.elements[item].backgroundDim){
            var backgroundDim = document.createElement('div')
            backgroundDim.style.position = "absolute"
            backgroundDim.style.width = "100%"
            backgroundDim.style.height = "100%"
            backgroundDim.style.top = "0"
            backgroundDim.style.zIndex = 3
            backgroundDim.style.background = self.elements[item].backgroundDim
            backgroundDim.classList.add("dimBackground")
            createdContainer.appendChild(backgroundDim)
        }


        for(const contentElement in self.elements[item].content){
            var newContentElement = document.createElement(self.elements[item].content[contentElement].contentType)
            if(self.elements[item].content[contentElement].class){
                newContentElement.classList.add(self.elements[item].content[contentElement].class)
            }
            if(self.elements[item].content[contentElement].colour){
                newContentElement.style.color = self.elements[item].content[contentElement].colour
            }
            
            newContentElement.style.zIndex = 4
            newContentElement.style.marginTop = "5px"
            newContentElement.style.marginBottom = "5px"
            newContentElement.innerHTML = self.elements[item].content[contentElement].contentInnerHTML
            
            if(self.elements[item].contentAlignment){
                var splitFlexPresent = self.elements[item].contentAlignment.toLowerCase().split(" ")
                if(splitFlexPresent[0] == "left"){
                    newContentElement.style.textAlign = "left"
                }else if(splitFlexPresent[0] == "right"){
                    newContentElement.style.textAlign = "right"
                }else if(splitFlexPresent[0] == "center"){
                    newContentElement.style.textAlign = "center"
                }
            }

            if(self.elements[item].content[contentElement].contentType == "a"){
                newContentElement.href = self.elements[item].content[contentElement].href
            }
            
            if(self.elements[item].content[contentElement].id){
                newContentElement.id = self.elements[item].content[contentElement].id
            }
            
            innerFlexContainer.appendChild(newContentElement)





        }


        // console.log(carouselIndex)

        createdContainer.style.transform = 'translateX(' + (100 * carouselIndex) + '%)'

        carouselIndex++

    }

    if(self.animationType){
        if(self.animationType.toLowerCase() == "auto"){
            var newStylesheet = document.createElement('style')
            newStylesheet.id = 'jc-' + randomIdentifier + "-stylesheet"
            newStylesheet.innerHTML = "h1{ color: green }"
            document.body.appendChild(newStylesheet)
            var elements = selectedElement.childNodes
            var intElementCounter = 0
            for(const passThrough in elements){
                var elementToAffect = elements[passThrough]

                intElementCounter++
            }
            console.log("auto")

        }else if(self.animationType.toLowerCase() == "manual"){

        }else{
            console.error("Animation type invalid")
        }
    }
    

    return self
}





