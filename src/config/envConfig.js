export const config = {
  apiHeadProd: "https://ayuraid.onrender.com",
  apiHeadDev: "https://ayuraid.onrender.com",
  env: "dev",
  languages: [
    {id:0,name:'English',code:'en'},
    {id:1,name:'Hindi',code:'hi'},
    {id:2,name:'Tamil',code:'ta'},
    {id:3,name:'Spanish',code:'es'},
  ]
};

export const ApiHead =
  config.env === "prod" ? config.apiHeadProd : config.apiHeadDev;

export const ApiHeadAi = "https://fair-gray-python-garb.cyclic.app";

export const ApiCollection = {
  authController: {
    login: `${ApiHead}/api/auth/login`,
    signup: `${ApiHead}/api/auth/signup`,
    forgetPassword: `${ApiHead}/api/auth/forgotPassword`,
    resetPassword: `${ApiHead}/api/auth/resetPassword`, // /id
  },
  blogs: {
    allBlogs: `${ApiHead}/api/blog/allBlogs`,
    blogById: `${ApiHead}/api/blog/blog`, // /id
    myBlogs: `${ApiHead}/api/blog/blogs`,
    searchBlog: `${ApiHead}/api/blog/search`,
    likeBlog: `${ApiHead}/api/blog/like`, // /id
    unlikeBlog: `${ApiHead}/api/blog/unlike`, // /id
  },

  dosage: {
    logBlog: `${ApiHead}/api/dose/getDosageOfLogedIn`,
    addDosage: `${ApiHead}/api/dose/add_dosage`,
  },
  utils: {
    wakeup: `${ApiHead}/api/wakeup`,
  },
  ai:{
    askChatbot: `${ApiHeadAi}/chatbot/ask`,
  }
};
