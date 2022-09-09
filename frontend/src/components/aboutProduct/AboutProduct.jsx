import Video from "../../resourses/video.mp4"
import CustomizationIcon from "../../resourses/img/benefit/customization.png"
import EcosystemIcon from "../../resourses/img/benefit/ecosystem.png"
import PriceIcon from "../../resourses/img/benefit/price.png"
import SupportIcon from "../../resourses/img/benefit/support.png"

const AboutProduct = () => {
    return (
        <div className="product">
            <h2 className="title">About the product</h2>
            <div className="product__video">
                <video autoPlay muted loop preload="auto" src={Video} type="video/mp4" ></video>
                <div className="product__video_dark"></div>
            </div>
            <div className="container">
                <div className="benefits__wrapper">
                    <div className="product__benefits">
                        <div className="benefit">
                            <img src={CustomizationIcon} alt="Benefit" />
                            <div className="benefit__title">Customization</div>
                            <p className="benefit__descr">of all interface elements on the screen.</p>
                        </div>
                        <div className="benefit">
                            <img src={EcosystemIcon} alt="Benefit" />
                            <div className="benefit__title">Ecosystem </div>
                            <p className="benefit__descr">makes it possible to monitor rates and portfolio profits.</p>
                        </div>
                        <div className="benefit">
                            <img src={PriceIcon} alt="Benefit" />
                            <div className="benefit__title">Price</div>
                            <p className="benefit__descr">of all interface elements on the screen.</p>
                        </div>
                        <div className="benefit">
                            <img src={SupportIcon} alt="Benefit" />
                            <div className="benefit__title">Support </div>
                            <p className="benefit__descr">for up to 10 cryptocurrencies.</p>
                        </div>
                    </div>
                    <div className="product__btn">
                        <button className="btn btn_big">More</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AboutProduct;

