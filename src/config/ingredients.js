const temp = [
  "Amalaki",
  "Figs",
  "Bhumyamalaki",
  "Kutaja",
  "Loha Bhasma",
  "Nimba",
  "Chitrakmool",
  "Kankola",
  "Patala",
  "Kushta",
  "Daruharidra",
  "Ghrita",
  "Trivrit",
  "Devadaru",
  "Rohitaka",
  "Gokshuradi Guggulu",
  "Lavang",
  "Tejpatta",
  "Dalchini",
  "Nagarmotha",
  "Kali Jeeri",
  "Javitri",
  "Haldi",
  "Sita",
  "Tankan Bhasma",
  "Yashtimadhu",
  "Tamra Bhasma",
  "Pippali Mool",
  "Yavasa",
  "Vacha",
  "Shankha Bhasma",
  "Kharjura",
  "Ashoka",
  "Raktapunarnava",
  "Chopchini",
  "Amrasthi",
  "Katphala",
  "Priyangu",
  "Patha",
  "Rakta Chandana",
  "Shwet Chandan",
  "Shringa Bhasma",
  "Pippalimoola",
  "Tagara",
  "Rasna",
  "Kumkuma",
  "Kukkutanda Twak Bhasma",
  "Kushtha",
  "Hing",
  "Sindhura",
  "Chavya",
  "Danti",
  "Rajata Bhasma",
  "Vang Bhasma",
  "Tamra Bhasma",
  "Kamsya Bhasma",
  "Rajapravartini Vati",
  "Ahiphena",
  "Tuttha",
  "Tankana",
  "Gorakhmundi",
  "Bhringaraja",
  "Yashtimadhu Ghrita",
  "Ksheerabala Taila",
  "Eladi Taila",
  "Mahatiktaka Ghrita",
  "Saptamrita Lauha",
  "Vilwadi Gulika",
  "Navayasa Lauha",
  "Pippalyadi Yoga",
  "Haridra Khand",
  "Tapyadi Lauha",
  "Mahamanjishthadi Kwath",
  "Punarnavadi Mandura",
  "Arogyavardhini Vati",
  "Maharasnadi Kwath",
  "Bhunimbadi Kwath",
  "Manjishtadi Kwath",
  "Gokshuradi Guggulu",
  "Kaishore Guggulu",
  "Amritarishta",
  "Bhringarajasava",
  "Dashamoola Kwath",
  "Abhyarishta",
  "Dadimadi Ghrita",
  "Shankhapushpi Syrup",
  "Drakshasava",
  "Chyawanprash",
  "Mahatriphala Ghrita",
  "Dantyarishta",
  "Usheerasava",
  "Yogaraja Guggulu",
  "Bilvadi Gutika",
  "Khadiradi Gutika",
  "Kumaryasava",
  "Shatavari Gulam",
  "Kokilaksha Kashayam",
  "Punarnavadi Kashayam",
  "Bilva Taila",
  "Dhanvantaram Taila",
  "Brihat Saindhavadi Taila",
  "salt",
  "Chyavan Prash",
  "Brahma Rasayan",
  "Ashwagandha",
  "Shatavari",
  "Bala",
  "Licorice Ghee",
  "Asafoetida",
  "Trikatu",
  "Rock Salt",
  "Cumin",
  "Black Cumin",
  "Ajwan",
  "Cyperus",
  "Vidanga",
  "Cardamom",
  "Cinnamon Leaf",
  "Cloves",
  "Trivrit",
  "Raw Sugar",
  "Bilva",
  "Ginger",
  "Fennel",
  "Bombax",
  "Woodfordia",
  "Cardamom",
  "Cloves",
  "Keshara",
  "Kolamajja",
  "Laja",
  "Honey",
  "Priyangu",
  "Cyperus",
  "Sandalwood",
  "Long Pepper",
  "Chitrak",
  "5 Salts",
  "Trikatu",
  "Ajwan",
  "Chavya",
  "Asafoetida",
  "Cloves",
  "Camphor",
  "Cardamom",
  "Cinnamon",
  "Nagakeshar",
  "Nutmeg",
  "Vetivert",
  "Ginger",
  "Cumin",
  "Valerian",
  "Bamboo Manna",
  "Jatamansi",
  "Long Pepper",
  "Sandalwood",
  "Cubeb",
  "Raw Sugar",
  "Shatavari",
  "Gokshura",
  "Cannabis Seed",
  "Vamsha Rochana",
  "Sarsaparilla",
  "Cubeb",
  "Mucuna",
  "Black Musali",
  "White Musali",
  "Trikatu",
  "Dioscorea",
  "Ashwagandha",
  "Nishotha",
  "Garlic",
  "Cumin",
  "Rock Salt",
  "Sulphur",
  "Trikatu",
  "Asafoetida",
  "Lemon Juice",
  "Gotu Kola",
  "Shankhapushpi",
  "Calamus",
  "Black Pepper",
  "Water-Soluble Extract (Starch) of Guduchi",
  "Kutaj",
  "Ghan",
  "Atish",
  "Licorice",
  "Bitters",
  "Talisah",
  "Triphala",
  "Cyperus",
  "Vidanga",
  "Cardamom",
  "Cinnamon",
  "Raw Sugar",
  "Bilva",
  "Ginger",
  "Fennel",
  "Cardamom",
  "Bombax",
  "Woodfordia",
  "Others",
  "Cardamom",
  "Cloves",
  "Keshara",
  "Kolamajja",
  "Chitrak",
  "5 Salts",
  "Trikatu",
  "Ajwan",
  "Chavya",
  "Asafoetida",
  "Cloves",
  "Camphor",
  "Cardamom",
  "Cinnamon",
  "Nagakeshar",
  "Nutmeg",
  "Vetivert",
  "Ginger",
  "Cumin",
  "Valerian",
  "Bamboo Manna",
  "Jatamansi",
  "Long Pepper",
  "Sandalwood",
  "Cubeb",
  "Raw Sugar",
  "Shatavari",
  "Gokshura",
  "Cannabis Seed",
  "Vamsha Rochana",
  "Sarsaparilla",
  "Fennel",
  "Pippali",
  "Pippali Root",
  "Black Pepper",
  "Cloves",
  "Ginger",
  "Cinnamon",
  "Others",
  "Shatavari",
  "Gokshura",
  "Atibala",
  "Others",
  "Chiretta",
  "Various Mainly Bitter or Pungent Herbs",
  "Talisha",
  "Trikatu",
  "Bamboo Manna",
  "Cardamom",
  "Cinnamon",
  "Raw Sugar",
  "Black Pepper",
  "Long Pepper",
  "Dry Ginger",
  "Haritaki",
  "Amalaki",
  "Bibhitaki",
  "Cinnamon",
  "Cinnamon Leaf",
  "Cardamom",
  "Guggul",
  "Triphala",
  "Ashes",
  "sitopaladi",
  "maha sudarshan",
  "Chyavan Prash",
  "Brahma Rasayan",
  "Ashwagandha",
  "Shatavari",
  "Bala",
  "Licorice Ghee",
  "Asafoetida",
  "Trikatu",
  "Rock Salt",
  "Cumin",
  "Black Cumin",
  "Ajwan",
  "Cyperus",
  "Vidanga",
  "Cardamom",
  "Cinnamon Leaf",
  "Cloves",
  "Trivrit",
  "Raw Sugar",
  "Bilva",
  "Ginger",
  "Fennel",
  "Bombax",
  "Woodfordia",
  "Cardamom",
  "Cloves",
  "Keshara",
  "Kolamajja",
  "Laja",
  "Priyangu",
  "Cyperus",
  "Sandalwood",
  "Long Pepper",
  "Chitrak",
  "5 Salts",
  "Trikatu",
  "Ajwan",
  "Chavya",
  "Asafoetida",
  "Cloves",
  "Camphor",
  "Cardamom",
  "Cinnamon",
  "Nagakeshar",
  "Nutmeg",
  "Vetivert",
  "Ginger",
  "Cumin",
  "Valerian",
  "Bamboo Manna",
  "Jatamansi",
  "Long Pepper",
  "Sandalwood",
  "Cubeb",
  "Raw Sugar",
  "Shatavari",
  "Gokshura",
  "Cannabis Seed",
  "Vamsha Rochana",
  "Sarsaparilla",
  "Cubeb",
  "Mucuna",
  "Black Musali",
  "White Musali",
  "Trikatu",
  "Dioscorea",
  "Ashwagandha",
  "Nishotha",
  "Garlic",
  "Cumin",
  "Rock Salt",
  "Sulphur",
  "Trikatu",
  "Asafoetida",
  "Lemon Juice",
  "Gotu Kola",
  "Shankhapushpi",
  "Calamus",
  "Black Pepper",
  "Water-Soluble Extract (Starch) of Guduchi",
  "Kutaj",
  "Ghan",
  "Atish",
  "Licorice",
  "Bitters",
  "Talisah",
  "Triphala",
  "Cyperus",
  "Vidanga",
  "Cardamom",
  "Cinnamon",
  "Raw Sugar",
  "Bilva",
  "Ginger",
  "Fennel",
  "Cardamom",
  "Bombax",
  "Woodfordia",
  "Others",
  "Cardamom",
  "Cloves",
  "Keshara",
  "Kolamajja",
  "Chitrak",
  "5 Salts",
  "Trikatu",
  "Ajwan",
  "Chavya",
  "Asafoetida",
  "Cloves",
  "Camphor",
  "Cardamom",
  "Cinnamon",
  "Nagakeshar",
  "Nutmeg",
  "Vetivert",
  "Ginger",
  "Cumin",
  "Valerian",
  "Bamboo Manna",
  "Jatamansi",
  "Long Pepper",
  "Sandalwood",
  "Cubeb",
  "Raw Sugar",
  "Shatavari",
  "Gokshura",
  "Cannabis Seed",
  "Vamsha Rochana",
  "Sarsaparilla",
  "Fennel",
  "Pippali",
  "Pippali Root",
  "Black Pepper",
  "Cloves",
  "Ginger",
  "Cinnamon",
  "Others",
  "Shatavari",
  "Gokshura",
  "Atibala",
  "Others",
  "Chiretta",
  "Various Mainly Bitter or Pungent Herbs",
  "Talisha",
  "Trikatu",
  "Bamboo Manna",
  "Cardamom",
  "Cinnamon",
  "Raw Sugar",
  "Black Pepper",
  "Long Pepper",
  "Dry Ginger",
  "Haritaki",
  "Amalaki",
  "Bibhitaki",
  "Cinnamon",
  "Cinnamon Leaf",
  "Cardamom",
  "Guggul",
  "Triphala",
  "Ashes",
  "Castor Oil",
  "Warm Water",
  "Warm milk",
  "Flaxseed",
  "Ghee",
  "Honey",
  "Lemon Juice",
  "Lime Juice",
  "Milk",
  "Molasses",
  "Olive Oil",
  "Sesame Oil",
  "Sugarcane Juice",
  "Sugar",
  "Water",
  "Yogurt",
  "Aloe Vera",
  "Brahmi",
  "Ginger Powder",
  "Licorice",
  "Ghee",
  "tulsi",
  "Turmeric (Haldi)",
  "Cumin (Jeera)",
  "Coriander (Dhania)",
  "Ginger (Adrak)",
  "Garlic (Lahsun)",
  "Cinnamon (Dalchini)",
  "Cloves (Laung)",
  "Cardamom (Elaichi)",
  "Fenugreek (Methi)",
  "Basil (Tulsi)",
  "Amla (Indian Gooseberry)",
  "Ashwagandha",
  "Neem",
  "Shatavari",
  "Triphala",
  "Brahmi",
  "Guduchi",
  "Licorice (Mulethi)",
  "Ajwain",
  "Haritaki",
  "Amalaki",
  "Bibhitaki",
  "Mint (Pudina)",
  "Fennel (Saunf)",
  "Pippali (Long Pepper)",
  "Bhringraj",
  "Moringa (Drumstick)",
  "Aloe Vera",
  "Saffron (Kesar)",
  "Manjistha",
  "Trikatu (Three Peppers)",
  "Kutki",
  "Vidanga",
  "Punarnava",
  "Guggul",
  "Vacha",
  "Arjuna",
  "Kalmegh",
  "Gotu Kola (Centella asiatica)",
  "Tamarind",
  "Chitrak",
  "Kaunch (Velvet Bean)",
  "Kokum",
  "Nagkesar",
  "Sandalwood (Chandan)",
  "Usheer (Vetiver)",
  "Yashtimadhu (Licorice)",
  "Jatamansi",
  "Kesar (Saffron)",
  "Nagarmotha",
  "Khus Khus (Poppy Seeds)",
  "Karpura (Camphor)",
  "Shilajit",
  "Kutaja",
  "Bilva (Bael)",
  "Kadamba",
  "Jaggery",
  "Ginger Root Powder",
  "Vidari Kanda",
  "Kali Mirch (Black Pepper)",
  "Kokum",
  "Bamboo Manna",
  "Nutmeg (Jaiphal)",
  "Shilapravang",
  "Gokshura",
  "Bala",
  "Babul",
  "Devil's Dung (Hing)",
  "Tulsi Seeds",
  "Kamarkas",
  "Jivanti",
  "Dhataki",
  "Badi Elaichi",
  "Dalchini (Cinnamon)",
  "Pipali (Long Pepper)",
  "Sunthi (Dried Ginger)",
  "Vacha",
  "Vidari",
  "Gorakhmundi",
  "Brihati",
  "Kantakari",
  "Shankhpushpi",
  "Bakuchi",
  "Bilwa",
  "Babool",
  "Amaltas",
  "Jambu Beej",
  "Chandan",
  "Daruhaldi",
  "Giloy",
  "Hareetaki",
  "Bakayan",
  "Rasna",
  "Tagar",
  "Talispatra",
  "Yashti Madhu",
  "Shatapushpa",
  "Tila Taila (Sesame Oil)",
  "Erand Taila (Castor Oil)",
  "Nimbu",
  "Arjun Chaal",
  "Yavakshara",
  "Pudina Satva",
  "Katuki",
  "Triphala Guggul",
  "Sariva",
  "Katphala",
  "Japa Pushpa",
  "Chakramarda",
  "Javitri",
  "Lavang (Clove)",
  "Elaychi",
  "Badi Elaychi",
  "Safed Musli",
  "Lavang Taila",
  "Kumkum",
  "Haridra Khand",
  "Amalaki Rasayana",
  "Pippali Rasayana",
  "Brahmi Rasayana",
  "Vidari Rasayana",
  "Chyawanprash",
  "Mahanarayan Oil",
  "Maha Bhringraj Oil",
  "Balashwagandhadi Oil",
  "Shatavari Ghrita",
  "Ashwagandha Ghrita",
  "Triphala Ghrita",
  "Kumkumadi Taila",
  "Panchagavya Ghrita",
  "Shatavari Kalpa",
  "Punarnavasava",
  "Dashamoolarishta",
  "Lodhrasava",
  "Khadirarishta",
  "Usheerasava",
  "Sarivadyasava",
  "Mustakarishta",
  "Drakshasava",
  "Amalakyasava",
  "Arvindasava",
  "Vasarishta",
  "Varanadi Kwath",
  "Rasnadi Kwath",
  "Dashmool Kwath",
  "Khadiradi Kwath",
  "Mahamanjishthadi Kwath",
  "Manjishtadi Kwath",
  "Panchatikta Ghrita Guggulu",
  "Chandraprabha Vati",
  "Triphala Guggulu",
  "Yograj Guggulu",
  "Kaishore Guggulu",
  "Mahayograj Guggulu",
  "Lakshadi Guggulu",
  "Gandhak Rasayan",
  "Kamdudha Ras",
  "Godanti Bhasma",
  "Yashad Bhasma",
  "Shankha Bhasma",
  "Praval Bhasma",
  "Abhrak Bhasma",
  "Swarna Makshik Bhasma",
  "Lauh Bhasma",
  "Rajat Bhasma",
  "Tamra Bhasma",
  "Vang Bhasma",
  "Mandoor Bhasma",
  "Naga Bhasma",
  "Kumari Asav",
  "Ashokarishta",
  "Kumaryasava",
  "Vasakasava",
  "Draksharishta",
  "Jeerakarishta",
  "Punarnavasav",
  "Arvindasav",
  "Usirasav",
  "Kanakasava",
  "Dhanwantarasav",
  "Rohitakarisav",
  "Balarisht",
  "Darvyarishta",
  "Vasarishta",
  "Rajahpravartini Vati",
  "Pushyanug Churna",
  "Kumaryasava",
  "Dhanwantarasav",
  "Lohasav",
  "Shankh Vati",
  "Shilapravang",
  "Triphala Churna",
  "Gokshuradi Churna",
  "Amrutharishtam",
  "Arjunarishtam",
  "Kumaryasav",
  "Draksharishtam",
  "Lodhrasav",
  "Punarnavasav",
  "Mustakarishtam",
  "Khadirarishtam",
  "Jeerakarishtam",
  "Pippalyasavam",
  "Usheerasav",
  "Dashamoolarishtam",
  "Saraswatarishta",
  "Brahmarasayan",
  "Kshirabala Taila",
  "Dhanvantaram Taila",
  "Murivenna",
  "Pinda Taila",
  "Balashwagandhadi Taila",
  "Chandanadi Taila",
  "Karpuradi Taila",
  "Ksheerabala 101",
  "Mahamasha Taila",
  "Sahacharadi Taila",
  "Shatavari Ghrita",
  "Triphala Ghrita",
  "Amritaprasha Ghrita",
  "Abhyanga (Self-Massage)",
  "Udvartana (Herbal Powder Massage)",
  "Shirodhara",
  "Abhyanga Snana (Herbal Bath)",
  "Nasya (Nasal Administration)",
  "Neti (Nasal Irrigation)",
  "Dhoomapana (Herbal Smoking)",
  "Kavalagraha (Oil Pulling)",
  "Tongue Scraping",
  "Ayurvedic Diet",
  "Tridoshic Dal",
  "Mung Bean Soup (Dal)",
  "Kitchari",
  "Ghee",
  "Tulsi Tea",
  "Cumin-Coriander-Fennel Tea",
  "Ginger Tea",
  "Triphala Tea",
  "Golden Milk (Turmeric Milk)",
  "Amla Candy",
  "Triphala Churna",
  "Ashwagandha Powder",
  "Brahmi Powder",
  "Shatavari Powder",
  "Trikatu Churna",
  "Amla Powder",
  "Neem Powder",
  "Tulsi Powder",
  "Guduchi Powder",
  "Haritaki Powder",
  "Bibhitaki Powder",
  "Amalaki Powder",
  "Turmeric Powder",
  "Cumin Powder",
  "Coriander Powder",
  "Ginger Powder",
  "Cardamom Powder",
  "Cloves Powder",
  "Cinnamon Powder",
  "Nutmeg Powder",
  "Triphala Guggulu",
  "Yograj Guggulu",
  "Kaishore Guggulu",
  "Gandhak Rasayan",
  "Kamdudha Ras",
  "Chyawanprash",
  "Brahmi Rasayana",
  "Amalaki Rasayana",
  "Pippali Rasayana",
  "Ashwagandha Rasayana",
  "Vidari Kanda",
  "Vidarikand Churna",
  "Chitrakadi Vati",
  "Kanchanar Guggulu",
  "Trikatu Churna",
  "Punarnavadi Mandur",
  "Kutki Churna",
  "Pippali Churna",
  "Bilva Aloe Vera Juice",
  "Guduchi Juice",
  "Amla Juice",
  "Karela Juice",
  "Jamun Juice",
  "Kokum Juice",
  "Triphala Juice",
  "Ashwagandha Arishta",
  "Punarnavasava",
  "Balarishta",
  "Jeerakarishta",
  "Arvindasava",
  "Saraswatarishta",
  "Kumaryasava",
  "Sarivadyasava",
  "Pippalyasavam",
  "Mustakarishtam",
  "Draksharishta",
  "Dashamoolarishtam",
  "Usheerasava",
  "Yogaraj Guggulu",
  "Maharasnadi Kwath",
  "Dashmool Kwath",
  "Triphala Kwath",
  "Varanadi Kwath",
  "Panchatikta Ghrita Guggulu",
  "Kanakasava",
  "Chandanasava",
  "Khadirarishta",
  "Lakshadi Guggulu",
  "Yograj Guggulu",
  "Maha Triphala Ghrita",
  "Maharasnadi Kwath",
  "Vidaryadi Ghrita",
  "Vyaghri Taila",
  "Panchgun Taila",
  "Murivenna",
  "Eladi Taila",
  "Balashwagandhadi Taila",
  "Chandanadi Taila",
  "Sahacharadi Taila",
  "Jatyadi Taila",
  "Dasanga Lepa",
  "Eladi Lepa",
  "Nimbadi Lepa",
  "Panchavalkala Lepa",
  "Shalmali Kanti Lepa",
  "Shatadhauta Ghrita",
  "Sarivadyasava",
  "Rasnadi Lepa",
  "Madhuyashti Churna",
  "Pushyanug Churna",
  "Tapyadi Loha",
  "Sukumara Ghrita",
  "Pindasveda",
  "Janu Basti",
  "Greeva Basti",
  "Hridaya Basti",
  "Kati Basti",
  "Netra Tarpana",
  "Netra Basti",
  "Akshi Tarpana",
  "Kavala Graha",
  "Nasya",
  "Shiroabhyanga",
  "Shirodhara",
  "Abhyanga",
  "Swedana",
  "Netra Tarpana",
  "Upanaha",
  "Lepa",
  "Pindasveda",
  "Kati Basti",
  "Janu Basti",
  "Greeva Basti",
  "Hridaya Basti",
  "Shirodhara",
  "Nasya",
  "Akshi Tarpana",
  "Kavala Graha",
  "Pizzichilli",
  "Shirovasti",
  "Karnapoorana",
  "Shiroabhyanga",
  "Shiropichu",
  "Upanaha",
  "Lepa",
  "Guduchi",
  "Amrita (Ambrosia)",
  "Kuan Jin Teng",
  "Giloy Sattva",
  "Meshasringi",
  "Shardunika",
  "Madhunashini",
  "Jatamansi",
  "Valerianaceae",
  "Kapikacchu",
  "Mucuna pruriens",
  "Papilionaceae",
  "Kapikacchu",
  "Atmagupta",
  "Vanari",
  "Katuka (Kutki)",
  "Picrorrhiza kurroa",
  "Katuka",
  "Hu Huang Lian",
  "Kutaj",
  "Symplocos racemosa",
  "Styraceae",
  "Lodhra",
  "Phyllanthus Niruri",
  "Euphorbiaceae",
  "Bhumyamalaki",
  "Punarnava",
  "Boerhaavia diffusa",
  "Nyctaginaceae",
  "Sallaki",
  "Boswellia seffata",
  "Burseraceae",
  "Chyavanprash",
  "Ashwagandha",
  "Calamus",
  "Garlic",
  "Ginseng",
  "Guggul",
  "Haritaki",
  "Aloe Vera",
  "Amalaki",
  "Comfrey Root",
  "Gotu Kola",
  "Saffron",
  "Shatavari",
  "Bibhitaki",
  "Elecampane",
  "Guggul",
  "Pippali",
  "Aphrodisiacs (Vajikaranas)",
  "Angelica (Tang Kuei)",
  "Asafoetida",
  "Ashwagandha",
  "Asparagus",
  "Cloves",
  "Cotton Root",
  "Damiana",
  "False Unicorn",
  "Fenugreek",
  "Fo-ti",
  "Garlic",
  "Ginseng",
  "Gokshura",
  "Hibiscus",
  "Lotus Seeds",
  "Onions (Raw)",
  "Pippali",
  "Rehmannia",
  "Rose",
  "Saffron",
  "Saw Palmetto",
  "Shatavari",
  "Solomon’s Seal",
  "Vidari-Kanda",
  "Wild Yam",
  "Angelica (Tang Kuei)",
  "Ashwagandha",
  "Bah",
  "Fo-ti",
  "Ghee",
  "Ginseng",
  "Licorice",
  "Lotus Seeds",
  "Marshmallow",
  "Onions (Raw)",
  "Rehmannia",
  "Saw Palmetto",
  "Sesame Seeds",
  "Shatavari",
  "Solomon’s Seal",
  "Sugar (Raw)",
  "Vidari-Kanda",
  "Wild Yam",
  "sugar",
  "cardamom"
]

export const ayurvedicIngredients = new Set(temp);