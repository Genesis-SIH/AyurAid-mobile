

export const config = {
    apiHeadProd: "https://ayuraid.onrender.com",
    apiHeadDev: "https://ayuraid.onrender.com",
    env : 'dev'
}

export const ApiHead = config.env === 'prod' ? config.apiHeadProd : config.apiHeadDev


export const ApiCollection={
    authController:{
        login:`${ApiHead}/api/auth/login`,
        signup:`${ApiHead}/api/auth/signup`,
        forgetPassword:`${ApiHead}/api/auth/forgotPassword`,
        resetPassword:`${ApiHead}/api/auth/resetPassword`, // /id
    },
    blogs:{
        allBlogs:`${ApiHead}/api/blog/allBlogs`,
        blogById:`${ApiHead}/api/blog/blog`, // /id
        myBlogs:`${ApiHead}/api/blog/blogs`,
        searchBlog:`${ApiHead}/api/blog/search`,
        likeBlog:`${ApiHead}/api/blog/like`, // /id
        unlikeBlog:`${ApiHead}/api/blog/unlike`, // /id
    },
    utils:{
        wakeup:`${ApiHead}/api/wakeup`,
    }
}
