

export const config = {
    apiHeadProd: "https://ayuraid.onrender.com",
    apiHeadDev: "https://ayuraid.onrender.com",
    env : 'dev'
}

export const ApiHead = config.env === 'prod' ? config.apiHeadProd : config.apiHeadDev


export const ApiCollection={
    authController:{
        login:`${ApiHead}/api/login`,
        signup:`${ApiHead}/api/signup`,
        forgetPassword:`${ApiHead}/api/forgotPassword`,
        resetPassword:`${ApiHead}/api/resetPassword`, // /id
    },
    utils:{
        wakeup:`${ApiHead}/api/wakeup`,
    }
}
