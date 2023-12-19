export const config = {
  apiHeadProd: "https://ayuraid.onrender.com",
  apiHeadDev: "https://ayuraid.onrender.com",
  env: "dev",
  languages: [
    { id: 0, name: 'English', code: 'en' },
    { id: 1, name: 'Hindi', code: 'hi' },
    { id: 2, name: 'Tamil', code: 'ta' },
    { id: 3, name: 'Spanish', code: 'es' },
  ],
};

export const structureResponse = (data) => {

  const sectionRegex = /([A-Z]+):\n([\s\S]*?)(?=\n[A-Z]+:|\n$)/g;

  // Extract sections using the regular expression
  const sections = [];

  let match;
  console.log(sectionRegex.exec(data));

  while ((match = sectionRegex.exec(data)) !== null) {
    const heading = match[1];
    const content = match[2].trim().split('\n').map(line => line.trim());



    // Extract sources for the "SOURCES" section
    const sources = heading === 'SOURCES' ? content.map(source => source.slice(2)) : [];
  
    sections.push({ heading, content, sources });
  }

  // Output the result
  return sections;

}

export const ApiHead =
  config.env === "prod" ? config.apiHeadProd : config.apiHeadDev;

export const ApiHeadAi = "https://ayuraid-ai-y2sw.onrender.com/chatbot/ask";

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
  }
};
