import { useState } from "react";
import Icon from "../../resourses/img/ticker.png"

const Custom = () => {

    // const field = document.getElementsByClassName("custom__ticker__field").children;
    // const f = document.querySelector("#g")

    
    
    
    const handler = (e) => {

        let element = e.target;
        let a = window.getComputedStyle(element, null).getPropertyValue("background-color");
        
        let posY = e.target.offsetLeft / 160;
        let posX = e.target.offsetLeft / 128; 
        
        
        console.log(a)
    }

    const submitConfig = () => {
        const field = document.querySelector(".custom__ticker__field").childNodes;
        console.log(field)
        let obj = {};

        field.forEach((elem, i) => {
            i += 1
            return (
                obj[`position_x${i}`] = elem.offsetTop / 160,
                obj[`position_y${i}`] = elem.offsetLeft / 128,
                obj[`color_${i}`] = `ST7735_GREEN`,
                obj[`textsize_${i}`] = 1
            )
        });
        console.log(obj)
    }

    return (
        <>
            <h2 className="title">The product's name</h2>

            <div className="container">
                <div className="custom">
                    <div className="custom__product">
                        <div className="custom__ticker" onClick={(e) => handler(e)}>
                            <div id="g" className="custom__ticker__field" >
                                <img 
                                
                                src={Icon} alt="" />
                                <div className="data">21.08.2022</div>
                                <div className="data">33322</div>
                            </div>
                        </div>
                        <button onClick={submitConfig} className="btn">Apply</button>
                    </div>
                    <div className="custom__tags"></div>
                    <div className="custom__functional">
                        <div className="functional__title">Functional</div>
                        <div className="crypto-list">
                            <div className="crypto-list__item">
                                <div className="crypto-list__name-coin">
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Custom;