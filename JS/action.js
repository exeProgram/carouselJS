console.log(JCarousel(
    {
        width: '100%',
        height: '300px',
        target: 'targetElement',
        animationType: "auto",
        animationPause: 5,
        animationDuration: 3,
        animationDirection: 'default',
        flexFit: "stretch",
        elements:[
            {
                backgroundImage: ['photo-1.jfif', 'altText'], 
                backgroundColor: 'rgba(255,0,0)',
                backgroundDim: "rgba(0,0,0,0.5)",  
                contentAlignment: "center center",
                boxPadding: "10px 15px",
                content:[
                    {contentType: "h1", contentInnerHTML: "0", class:"carouselText", color: "white" ,id:"hi"},
                    {contentType: "a", contentInnerHTML: "applyNow", href: "https://www.google.co.uk", class:"carouselText", color: "white"}
                ],  
            },
            {
                backgroundImage: ['photo-2.jfif', 'altText'], 
                backgroundColor: 'rgba(0,255,0)',
                backgroundDim: "rgba(0,0,0,0.5)", 
                contentAlignment: "center center",
                boxPadding: "10px 15px",
                content:[
                    {contentType: "h1", contentInnerHTML: "1", class:"carouselText",id:"hi",color: 'white'},
                    {contentType: "a", contentInnerHTML: "applyNow", href: "https://www.google.co.uk", class:"carouselText", color: "white"}
                ],  
            },
        ]
    }
))
