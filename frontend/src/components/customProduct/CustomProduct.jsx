import Icon from "../../resourses/img/ticker.png"

export default function CustomProduct () {

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
    )
}

