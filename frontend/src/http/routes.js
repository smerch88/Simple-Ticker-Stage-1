import { Auth, CatalogPage, CustomPage, ProductPage, MainPage } from "../pages"
import { CATALOG_ROUTE, CUSTOM_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, PRODUCT_ROUTE } from "../utils/consts"

export const authRoutes = [

]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: CUSTOM_ROUTE,
        Component: CustomPage
    },
    {
        path: CATALOG_ROUTE,
        Component: CatalogPage
    },
    {
        path: PRODUCT_ROUTE,
        Component: ProductPage
    }
]