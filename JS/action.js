console.log(JCarousel(
    {
        width: '100%',
        height: '100vh',
        target: 'targetElement',
        animationType: "auto",
        animationPause: 5,
        animationDuration: 3,
        animationDirection: 'default',
        elements:[
            {
                backgroundImage: ['photo-1.jfif', 'altText'], 
                backgroundColor: 'rgba(255,0,0)',
                backgroundDim: "rgba(0,0,0,0.5)",  
                contentAlignment: "center center",
                boxPadding: "10px 15px",
                content:[
                    {contentType: "h1", contentInnerHTML: "0", class:"carouselText", colour: "white" ,id:"hi"},
                    {contentType: "a", contentInnerHTML: "applyNow", href: "https://www.google.co.uk", class:"carouselText", colour: "white"}
                ],  
            },
            {
                backgroundImage: ['photo-2.jfif', 'altText'], 
                backgroundColor: 'rgba(0,255,0)',
                backgroundDim: "rgba(0,0,0,0.5)", 
                contentAlignment: "center center",
                boxPadding: "10px 15px",
                content:[
                    {contentType: "h1", contentInnerHTML: "1", class:"carouselText", colour: "white" ,id:"hi"},
                    {contentType: "a", contentInnerHTML: "applyNow", href: "https://www.google.co.uk", class:"carouselText", colour: "white"}
                ],  
            },
            {
                backgroundColor: 'rgb(0,0,255)',
                contentAlignment: "center center",
                boxPadding: "0px 0px",
                content:[
                    {contentType:"a",contentInnerHTML:"Hi", href:"www.amazon.co.uk", id:"carousel-link",color: 'rgb(255,255,0)'},
                    {contentType:"h1",contentInnerHTML:"JOIN US", color: 'rgb(0,255,0)'}
                ]
            }
        ]
    }
))