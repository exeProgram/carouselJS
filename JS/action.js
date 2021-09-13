console.log(JCarousel(
    {
        width: '100%',
        height: '300px',
        target: 'targetElement',
        animationType: "auto",
        elements:[
            {
                background: ['photo-1.jfif', 'altText'], 
                backgroundDim: "rgba(0,0,0,0.5)", 
                contentAlignment: "center center",
                boxPadding: "10px 15px",
                content:[
                    {contentType: "h1", contentInnerHTML: "0", class:"carouselText", colour: "white" ,id:"hi"},
                    {contentType: "a", contentInnerHTML: "applyNow", href: "https://www.google.co.uk", class:"carouselText", colour: "white"}
                ],  
            },
            {
                background: ['photo-1.jfif', 'altText'], 
                backgroundDim: "rgba(0,0,0,0.5)", 
                contentAlignment: "center center",
                boxPadding: "10px 15px",
                content:[
                    {contentType: "h1", contentInnerHTML: "1", class:"carouselText", colour: "white" ,id:"hi"},
                    {contentType: "a", contentInnerHTML: "applyNow", href: "https://www.google.co.uk", class:"carouselText", colour: "white"}
                ],  
            },
        ]
    }
))