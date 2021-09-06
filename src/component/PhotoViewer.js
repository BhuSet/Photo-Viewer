import React from "react";
import './PhotoViewer.css';
//import { useState, useEffect } from 'react';

export function PhotoViewer({src}){
    return(
        <div className ="my-main-photo">
            <img src={src} alt ="loading error"/>
        </div>

    );
}

export function Photolist(){
    return(
        <div className ="photo-list">
            <img src="https://picsum.photos/id/100/367/267" alt ="loading error"/>
            <img src="https://picsum.photos/id/1000/367/267" alt ="loading error"/>
            <img src="https://picsum.photos/id/1003/367/267" alt ="loading error"/>
            <img src="https://picsum.photos/id/101/367/267" alt ="loading error"/>
            <img src="https://picsum.photos/id/1011/367/267" alt ="loading error"/>
            <img src="https://picsum.photos/id/1016/367/267" alt ="loading error"/>
        </div>

    );
}
