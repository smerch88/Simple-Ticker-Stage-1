import { crypto } from "../../../http/userAPI";
import Icon from "../../../resourses/img/ticker.png"

export default function CustomProduct () {

    const handler = (e) => {

        let element = e.target;
        let a = window.getComputedStyle(element, null).getPropertyValue("background-color");
        
        let posY = e.target.offsetLeft / 160;
        let posX = e.target.offsetLeft / 128; 
        
    
    }

    const submitConfig = () => {
        const data = {"crypto_section": {"profit_change": "10",
        "profit": "11",
        "fiat": "USD",
        "crypto_list": [
                         "XRP",
                         "DOGE",
                         "BTC",
                         "ETH",
                         "ETC",
                         "LUNA",
                         "BNB",
                         "SOL",
                         "RVN",
                         "DOT"
                         ],
         "number_to_display": 10,
         "crypto_price": [
                         0.343970,
                         0.067,
                         20000,
                         1400,
                         22.73,
                         0.000104,
                         260.73,
                         41.92,
                         0.02730,
                         7.59
                     ],
         "crypto_price_round": [6, 4, 2, 2, 2, 2, 6, 2, 6, 2]
         },
        "display_section": {
        "position_x1": 0.5,
        "position_y1": 0.1,
        "color_1": "ST7735_GREEN",
        "textsize_1": 1,
        "position_x2": 0.5,
        "position_y2": 0.2,
        "color_2": "ST7735_GREEN",
        "textsize_2": 1,
        "position_x3": 0.3,
        "position_y3": 0.3,
        "color_3": "ST7735_GREEN",
        "textsize_3": 1,
        "position_x4": 0.4,
        "position_y4": 0.4,
        "color_4": "ST7735_GREEN",
        "textsize_4": 1,
        "position_x5": 0.1,
        "position_y5": 0.5,
        "color_5": "ST7735_YELLOW",
        "textsize_5": 1,
        "position_x51": 0.1,
        "position_y51": 0.6,
        "color_51": "ST7735_MAGENTA ",
        "textsize_51": 1,
        "position_x52": 0.1,
        "position_y52": 0.7,
        "color_52": "ST7735_CYAN",
        "textsize_52": 1,
        "position_x53": 0.1,
        "position_y53": 0.8,
        "color_53": "ST7735_BLUE",
        "textsize_53": 1,
        "position_logo_x": 0.1,
        "position_logo_y": 0.1,
        "color_logo": "ST7735_ORANGE"
        },

        "messages_section": {
        "message_1": "My Profit:",
        "message_2": "120$",
        "message_3": "",
        "message_4": "",
        "message_5": "My Test : "
        }
        }
        console.log(data)
        crypto(data)
        // const field = document.querySelector(".custom__ticker__field").childNodes;
        // console.log(field)
        // let obj = {};

        // field.forEach((elem, i) => {
        //     i += 1
        //     return (
        //         obj[`position_x${i}`] = elem.offsetTop / 160,
        //         obj[`position_y${i}`] = elem.offsetLeft / 128,
        //         obj[`color_${i}`] = `ST7735_GREEN`,
        //         obj[`textsize_${i}`] = 1
        //     )
        // });
        // console.log(obj)

        
    }

    return (
        <div className="custom__product">
            <h3 className="custom__title">Product</h3>
            <div className="custom__ticker" onClick={(e) => handler(e)}>
                <div id="g" className="custom__ticker__field" >
                    <img 
                    
                    src={Icon} alt="" />
                    <div className="data">21.08.2022</div>
                    <div className="data">33322</div>
                </div>
            </div>
            <div className="custom__product__shadow"></div>
            <div className="custom__product__descr">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus diam parturient metus eget eu massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 

            Rhoncus diam parturient metus eget eu massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus diam parturient metus eget eu massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </div>
            <button onClick={submitConfig} className="btn">Apply</button>
        </div>
    )
}

