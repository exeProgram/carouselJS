JCarousel(
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
                    {contentType: "h1", contentInnerHTML: "", class:"", color: "white" ,id:""},
                    {contentType: "a", contentInnerHTML: "", href: "https://github.com", class:"", color: "white"}
                ],  
            },
            {
                backgroundImage: ['photo', 'altText'], 
                backgroundColor: 'rgba(0,255,0)',
                backgroundDim: "rgba(0,0,0,0.5)", 
                contentAlignment: "center center",
                boxPadding: "10px 15px",
                content:[
                    {contentType: "h1", contentInnerHTML: "", class:"",id:"",color: 'white'},
                    {contentType: "a", contentInnerHTML: "", href: "https://github.com", class:"", color: "white"}
                ],  
            },
        ]
    }
)








