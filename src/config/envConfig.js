

export const config = {
    apiHeadProd: "https://t21services.herokuapp.com",
    apiHeadDev: "https://t21services.herokuapp.com",
    env : 'dev'
}

export const ApiHead = config.env === 'prod' ? config.apiHeadProd : config.apiHeadDev


export const ApiCollection={
    authController:{
        login:`${ApiHead}/auth/login`,
        register:`${ApiHead}/auth/register`,
    }
}
