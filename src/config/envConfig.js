export const config = {
  apiHeadProd: "https://witty-sadly-piranha.ngrok-free.app",
  apiHeadDev: "https://witty-sadly-piranha.ngrok-free.app",
  // apiHeadProd: "https://witty-sadly-piranha.ngrok-free.app",
  // apiHeadDev: "https://witty-sadly-piranha.ngrok-free.app",
  env: "dev",
  languages: [
    { id: 0, name: "English", code: "en" },
    { id: 1, name: "Hindi", code: "hi" },
    { id: 2, name: "Tamil", code: "ta" },
    { id: 3, name: "Spanish", code: "es" },
    { id: 4, name: "Marathi", code: "mr" },
  ],
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
    myDosages: `${ApiHead}/api/dose/dosages`,
    addDosage: `${ApiHead}/api/dose/add_dosage`,
    getDosage: `${ApiHead}/api/dose/dosage`, // /id
    markCompleted: `${ApiHead}/api/dose/mark_dosage_slot`, // /id
  },
  utils: {
    wakeup: `${ApiHead}/api/wakeup`,
  },
  ai: {
    askChatbot: `https://ayuraid-ai-y2sw.onrender.com/chatbot/ask`,
    getChats: `https://ayuraid-ai-y2sw.onrender.com/chatbot/get`,
  }
};
