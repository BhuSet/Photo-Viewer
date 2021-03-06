import React from "react";

export const ImageContext = React.createContext({
    imgSrc: "https://picsum.photos/id/600/1600/900.jpg",
    setImgSrc: () => {},
})

export const IndexContext = React.createContext({
    index: 0,
    setIndex: () => {},
})