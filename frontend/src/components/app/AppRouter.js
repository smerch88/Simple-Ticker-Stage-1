import { Route, Routes, Redirect } from "react-router-dom";
import { publicRoutes } from "../../http/routes";
import { MAIN_ROUTE } from "../../utils/consts";

const AppRouter = () => {
    const isAuth = false;

    return (
        <Routes>
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>}/>
            )}
            <Route path={MAIN_ROUTE} element={<Component/>}/>
        </Routes>
    )
}

export default AppRouter;