import { useContext } from "react";
import { Route, Routes} from "react-router-dom";
import { Context } from "../..";
import { publicRoutes } from "../../http/routes";
import { MainPage } from "../../pages";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>}/>
            )}
            <Route path='/*' element={<MainPage/>}/>
        </Routes>
    )
}

export default AppRouter;