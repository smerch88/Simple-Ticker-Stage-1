import Video from "../../resourses/video.mp4"
import CustomizationIcon from "../../resourses/img/benefit/customization.png"
import EcosystemIcon from "../../resourses/img/benefit/ecosystem.png"
import PriceIcon from "../../resourses/img/benefit/price.png"
import SupportIcon from "../../resourses/img/benefit/support.png"
import SupportIconInner from "../../resourses/img/benefit/support2.png"

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
                            <div className="benefit__descr">of all interface elements on the screen.</div>
                        </div>
                        <div className="benefit">
                            <img src={EcosystemIcon} alt="Benefit" />
                            <div className="benefit__title">Ecosystem </div>
                            <div className="benefit__descr">makes it possible to monitor rates and portfolio profits.</div>
                        </div>
                        <div className="benefit">
                            <img src={PriceIcon} alt="Benefit" />
                            <div className="benefit__title">Price</div>
                            <div className="benefit__descr">of all interface elements on the screen.</div>
                        </div>
                        <div className="benefit">
                            <div className="benefit__pic">
                                <img src={SupportIcon} alt="Benefit" />
                                <img src={SupportIconInner} alt="Benefit" className="benefit__pic-inner"/>
                            </div>
                            <div className="benefit__title">Support </div>
                            <div className="benefit__descr">for up to 10 cryptocurrencies.</div>
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

