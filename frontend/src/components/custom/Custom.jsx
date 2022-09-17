import CustomFunctional from "./customFunctional/CustomFunctional";
import CustomProduct from "./customProduct/CustomProduct";
import CustomTags from "./customTags/CustomTags";

const Custom = () => {
    
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