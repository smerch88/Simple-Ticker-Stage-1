import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Icon from "../../resourses/img/ticker.png"
import CustomFunctional from "./customFunctional/CustomFunctional";
import CustomProduct from "./customProduct/CustomProduct";
import CustomTags from "./customTags/CustomTags";

const Custom = () => {

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
        <div className="custom">
            <h2 className="title">The product's name</h2>

            <div className="container">
                <div className="custom__wrapper">
                    <CustomProduct/>
                    <CustomTags/>
                    <CustomFunctional/>
                </div>
            </div>
        </div>
    )
}

export default Custom;