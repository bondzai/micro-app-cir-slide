import { ImageData } from "./imageData.js"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import React, { useState, useEffect } from "react";

const ImageSlider = () => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 37) {
                slideBack();
            } else if (event.keyCode === 39) {
                slideForward();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [current]);

    const slideBack = () => {
        if (current === 0) {
            setCurrent(ImageData.length - 1)
        } else {
            setCurrent(current - 1)
        }
    }
    const slideForward = () => {
        if (current === ImageData.length - 1) {
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    }

    return (
        <section className = "slider">
            {ImageData.map((data, index) => {
                return (
                    <div className = {index === current ? "single active" : "single"} key = {index}>
                        {index === current && (
                            <div>
                                <img src = {data.image} alt = {data.name} className = "image"/>
                                <p>{data.description}</p>
                            </div>
                        )}
                    </div>
                )
            })}
            <div className="arrow">
                <AiOutlineArrowLeft className = "arrow-left" onClick={slideBack}/>
                <AiOutlineArrowRight className = "arrow-right" onClick={slideForward}/>                
            </div>
        </section>
    )
}

export default ImageSlider;