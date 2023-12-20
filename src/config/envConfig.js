export const config = {
  apiHeadProd: "https://ayuraid-backend.cyclic.app",
  apiHeadDev: "https://ayuraid-backend.cyclic.app",
  env: "dev",
  languages: [
    { id: 0, name: "English", code: "en" },
    { id: 1, name: "Hindi", code: "hi" },
    { id: 4, name: "Marathi", code: "mr" },
    { id: 2, name: "Tamil", code: "ta" },
    { id: 3, name: "Spanish", code: "es" },
    { id: 4, name: "Marathi", code: "mr" },
  ],
  books: [
    {
      "id": 1,
      "bookName": "The-yoga-of-herbs an-Ayurvedic-guide-to-herbal-medicine",
      "author": "Dr. David Frawley",
      "url": "https://drive.google.com/file/d/1XIP92vp1Ytl89cBnUiNfqdrNrnJ7RDr9/view?usp=sharing"
    },
    {
      "id": 2,
      "bookName": "The Complete Book of Ayurvedic Home Remedies",
      "author": "Dr. Vasant Lad",
      "url": "https://drive.google.com/file/d/1KhHuBA9GEtgFr1UOLUenMFf2IrlG395h/view?usp=sharing"
    },
    {
      "id": 3,
      "bookName": "THE AYURVEDIC PHARMACOPOEIA_OF INDIAVol-1",
      "author": "Acharya Balkrishna",
      "url": "https://drive.google.com/file/d/1xqsD2OFPD09J7ETNrvSUwfNu8rXwsmRc/view?usp=sharing"
    },
    {
      "id": 4,
      "bookName": "THE AYURVEDIC PHARMACOPOEIA_OF INDIAVol-2",
      "author": "Acharya Balkrishna",
      "url": "https://drive.google.com/file/d/19toKF4ZeUm2q_sdlKbtYA2x_bJWlp2zU/view?usp=sharing"
    },
    {
      "id": 5,
      "bookName": "The Ayurvedic Pharmacopoeia of India",
      "author": "Various Authors",
      "url": "https://drive.google.com/file/d/1mrbSzClf3zLpUhcBTrdcv0UvGORWjaAN/view?usp=sharing"
    },
    {
      "id": 6,
      "bookName": "PRACTICE OF AYURVEDA by-SWAMI SIVANANDA",
      "author": "Swami Sivananda",
      "url": "https://drive.google.com/file/d/1j5eBUvfb-bFhoIRMnn-N8YcTWt8kqSBy/view?usp=sharing"
    },
    {
      "id": 7,
      "bookName": "Ayurveda: The Science of Self Healing",
      "author": "Dr. David Frawley",
      "url": "https://drive.google.com/file/d/1Gv3gPtXkXMc6K6gj9gKYRarI-GOra23l/view?usp=sharing"
    },
    {
      "id": 8,
      "bookName": "Ayurveda_EDL_list_final",
      "author": "Random Ayurveda Author 8",
      "url": "https://drive.google.com/file/d/1J2dBJ15e_kvmsif5xtR2CdCMKWzw4q0y/view?usp=sharing"
    },
    {
      "id": 9,
      "bookName": "Ayurveda Encyclopedia - Swami Sadashiva Tirtha, R.C. Uniyal",
      "author": "Swami Sadashiva Tirtha, R.C. Uniyal",
      "url": "https://drive.google.com/file/d/1XhQIvrWem9xZYIDbuIgU72QAlyPff9AA/view?usp=sharing"
    },
    {
      "id": 10,
      "bookName": "An English Translation of shusrutha samhita",
      "author": "Sushruta",
      "url": "https://drive.google.com/file/d/18A86XBKMiZC5bGa9IjDM7DRkxGs5D56v/view?usp=sharing"
    }
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
    myDosages: `${ApiHead}/api/dose/dosages`,
    addDosage: `${ApiHead}/api/dose/add_dosage`,
    getDosage: `${ApiHead}/api/dose/dosage`, // /id
    markCompleted: `${ApiHead}/api/dose/mark_dosage_slot`, // /id
  },
  utils: {
    wakeup: `${ApiHead}/api/wakeup`,
  },
  ai: {
    askChatbot: `https://heroic-delicate-shiner.ngrok-free.app/chatbot/ask`,
    getChats: `https://heroic-delicate-shiner.ngrok-free.app/chatbot/get`,
  }
};
