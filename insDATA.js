const arrayData = [
  {
    "attribute": {
      "brand": "Samsung",
      "color": "Black"
    },
    "category": "Electronics",
    "description": "This is a Samsung Galaxy smartphone with advanced features.",
    "productImageURL": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2qAiby3lnVQ3OjK-sPZ3dFJVt5a8lLgWxQ&usqp=CAU"
    ],
    "productName": "Galaxy S21",
    "usp": "High-performance device with an amazing camera."
  },
  {
    "attribute": {
      "brand": "Adidas",
      "color": "Red"
    },
    "category": "Fashion",
    "description": "Stylish Adidas sneakers for a comfortable and trendy look.",
    "productImageURL": [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSGL0LQFgVdp9CwbM7YaMt3rEyXjTt1exQoon_q29ySr6R3BWuZFoZdMX3C5QBFdeUH4uUzd_khFAL77h9dO_72m98YxG9cdvJs9lmC4sWVuOvadDx6Hqx9Zg&usqp=CAE"
    ],
    "productName": "Comfort Fit Sneakers",
    "usp": "Perfect blend of style and comfort."
  },
  {
    "attribute": {
      "brand": "LG",
      "color": "Silver"
    },
    "category": "Home Appliance",
    "description": "LG Refrigerator with advanced cooling technology and spacious storage.",
    "productImageURL": [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRU-WRpn1um3XsMrkm1ikdbXzfkr_tqxYvl_ThG6Am4AU_qEUDk0yE95qLYiXySMMx3Rz0gNX63B9enEm6WSYX4RyWKJByBrhvDcIKSY1phJOtgxv5M2YUowo4&usqp=CAE"
    ],
    "productName": "Smart Refrigerator",
    "usp": "Energy-efficient and spacious design."
  },
  {
    "attribute": {
      "brand": "Random Publisher",
      "color": "N/A"
    },
    "category": "Books",
    "description": "A captivating novel that takes you on an unforgettable journey.",
    "productImageURL": [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTy4aYwYjqPrWLGlmdj8tKPCGAF0pbGNTYehCidX2mtRinPozQPiVw29g5fDJ35duowcY6O3o0qVwz51o0-UpWQ75EFbjNFwVCAlLvrodXPZQvY-BC7sOIb&usqp=CAE"
    ],
    "productName": "Journey of Reflections",
    "usp": "Engaging story with unexpected twists."
  },
  {
    "attribute": {
      "brand": "Sony",
      "color": "White"
    },
    "category": "Electronics",
    "description": "Sony noise-canceling headphones for an immersive audio experience.",
    "productImageURL": [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTu3jSVlhKRIz15vUtSek5NSGuugn9EaimUVIDIr9dKbwdNdw15SYQ_1EHdU5YIZqjsGgBfp0sCxH7bzsZgr_gOdh4GLZ_sifGksbYicV_noVfbQwJXzuS_&usqp=CAE"
    ],
    "productName": "Wireless Noise-Canceling Headphones",
    "usp": "Crystal-clear sound and comfortable design."
  },
  {
    "attribute": {
      "brand": "Nike",
      "color": "Blue"
    },
    "category": "Fashion",
    "description": "Nike running shoes designed for maximum performance and style.",
    "productImageURL": [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTCHG79XhyEX_RukBD0K6k-qns0cUMtdoVsIKuddU10_Axe-d6x9k6iATyJEsb96eCLUirJeoeg2Exo8wLpB0ZWqgSAE-NkaLK6eUM8O-OWkPXSfxDI1pFj&usqp=CAE"
    ],
    "productName": "Air Zoom Series",
    "usp": "Lightweight and responsive for an ultimate running experience."
  },
  {
    "attribute": {
      "brand": "Whirlpool",
      "color": "Stainless Steel"
    },
    "category": "Home Appliance",
    "description": "Whirlpool Dishwasher with advanced cleaning technology and energy efficiency.",
    "productImageURL": [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQZbAJBZ_7zL0uGpINpmb2QK5mqvZ0j6DDcLiUrL0ygqn9iSdz-kVQBFYiGF4Vmhfn-WWpX6O5CXdGgpcBJfGReFn0wlAu0jyuh0v4JNUYskr2ki-HcvyPsxA&usqp=CAE"
    ],
    "productName": "Smart Dishwasher",
    "usp": "Effortless cleaning with minimal energy consumption."
  },
  {
    "attribute": {
      "brand": "Jane Doe",
      "color": "N/A"
    },
    "category": "Books",
    "description": "A thought-provoking book that challenges conventional wisdom.",
    "productImageURL": [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQibJwxp4ah7yLShQSut2I4S6RZyx0Y6qaizWo2RhVFp7E2sp0HlbfQPzrU6glvaV_HwHlC5cifsFIMDVtVUT4b2xK9fAIBEKCNmysu23s&usqp=CAE"
    ],
    "productName": "Paradigm Shift",
    "usp": "Provocative insights that reshape your perspective."
  },
  {
    "attribute": {
      "brand": "Apple",
      "color": "Space Gray"
    },
    "category": "Electronics",
    "description": "Apple MacBook Pro with Retina display for powerful computing.",
    "productImageURL": [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRmmcjYEAA_0Ff7FeiYYdqHTSBCgU2X2U5CqZbtGPJLwon63fd81X_PBzFfH-td72OhySngODMVBnJXkl3R2uW7EdL6JQiDeXFwxurpU1hbD-qRtiCyI4Cq7w&usqp=CAE"
    ],
    "productName": "MacBook Pro",
    "usp": "Sleek design and exceptional performance."
  },
  {
    "attribute": {
      "brand": "Canon",
      "color": "Silver"
    },
    "category": "Electronics",
    "description": "Canon DSLR camera with high-resolution image capture capabilities.",
    "productImageURL": [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQw_OGpAs8pWFFbAxjGQ5V560FI1_WLj1UQVa6dIOQxlHM5wdVlwxBv63e2xn4gLVVbHg2Ukakf6LZC4Hz0fD2VrigR-q7Um0pLxLMwqgA&usqp=CAE"
    ],
    "productName": "EOS Rebel T7i",
    "usp": "Professional-grade photography at your fingertips."
  },
  {
    "attribute": {
      "brand": "Puma",
      "color": "Green"
    },
    "category": "Fashion",
    "description": "Puma athletic sneakers for a sporty and trendy look.",
    "productImageURL": [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTXGdEfRszI6lFckZ2msioWU0UimpGIc3isNRplimfoiGiWd7S-iP0dD7xRqnpthasrlvUjPE-q6ZW8gR7vWRBjes6_VSewDTKvzWchHnUV8ds_j3t3eF_P&usqp=CAE"
    ],
    "productName": "Ignite XT",
    "usp": "Optimal performance for your active lifestyle."
  },
  {
    "attribute": {
      "brand": "LG",
      "color": "White"
    },
    "category": "Home Appliance",
    "description": "LG Smart Washing Machine with AI technology for efficient laundry.",
    "productImageURL": [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQq7Wd84rxbxQaq8z8wAlTJZU8ywgKc63wIxbfuMGQtwFXUCwrV7VQvjrGOzm7w88nAilwknInvVbwCw_lapm0nUjN27pbIDYnYD_fQBcEUk2v307S6khhwtw&usqp=CAE"
    ],
    "productName": "TurboWash 360",
    "usp": "Smart and energy-efficient laundry solution."
  },
  {
    "attribute": {
      "brand": "Stephen King",
      "color": "N/A"
    },
    "category": "Books",
    "description": "A chilling horror novel by Stephen King that keeps you on the edge of your seat.",
    "productImageURL": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTrHC-VDKOP2KnaA-hUYBiXtsV55bQ6HtoCbcUkBqzNYAIw_W1o7VDgI8ozRqVXtbbuDbgBMkwsPnr9vQiKHZY3jsVJNhqaJ5lsJpKGjZ5iMEvlhT4OSQ2kvA&usqp=CAE"
    ],
    "productName": "The Haunting Shadows",
    "usp": "Masterful storytelling that grips your imagination."
  },
  {
    "attribute": {
      "brand": "Bose",
      "color": "Black"
    },
    "category": "Electronics",
    "description": "Bose SoundSport Wireless Earbuds for immersive audio during workouts.",
    "productImageURL": [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR7KFUyneK7oVnqVmg-aX1aqWzKHUj1kUHqHCTmi2Mx0AHe1ZOCQeO-xBVsIbvJBKjr7m876a8L7vkpa6NXqjmG0GRSrQxYjrV-9rD0jIl5vGUVX1tKFeFT&usqp=CAE"
    ],
    "productName": "SoundSport Free",
    "usp": "Wireless freedom with powerful sound."
  },
  {
    "attribute": {
      "brand": "Levi's",
      "color": "Denim Blue"
    },
    "category": "Fashion",
    "description": "Classic Levi's denim jeans for timeless style.",
    "productImageURL": [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQPfZTQ5S-45pEvuXqDu9wbhqXwAtSQBlPQe4VQ6hbE35xip-jwAMNEMLgVg5OjnFdTS2tedVTJaFL2tEjjyyb41whDm7JgSoV_PMFFO9MhmcTmbZMn12LWBg&usqp=CAE"
    ],
    "productName": "501 Original Fit",
    "usp": "Iconic denim for everyday wear."
  },
  {
    "attribute": {
      "brand": "KitchenAid",
      "color": "Red"
    },
    "category": "Home Appliance",
    "description": "KitchenAid Stand Mixer for versatile and efficient food preparation.",
    "productImageURL": [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRZ3iKpltffA2UIGbed38oicnNxQiV1LDiVk8WGwHk6Jgt2w-MvQC-XRhKmIlx1F5ChxIn0lwWu-kk6pqadcdQAKSPbA-6NLC76sQ66Yc4aaqGI-p4jj73f&usqp=CAE"
    ],
    "productName": "Artisan Series",
    "usp": "Elevate your culinary creations with ease."
  },
  {
    "attribute": {
      "brand": "J.K. Rowling",
      "color": "N/A"
    },
    "category": "Books",
    "description": "An enchanting fantasy novel by J.K. Rowling that sparks the imagination.",
    "productImageURL": [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSYT6vRmWC65CghrYvPoUWAuu8Z0FqYLqSZX-KEQi8aeeBuXjBzlNjVlh2yuFsCS4FGjX9bAElbz3hiU3D6RfnSzafmfH9qyluhYY1GH9E&usqp=CAE"
    ],
    "productName": "The Mystic Chronicles",
    "usp": "Magical adventures await within the pages."
  },
  {
    "attribute": {
      "brand": "Dell",
      "color": "Silver"
    },
    "category": "Electronics",
    "description": "Dell Inspiron Laptop for powerful computing on the go.",
    "productImageURL": [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS9OOBmHi2iPKjCIgEmbkHxq2l-r-tPKXL-0jaYbrkM2KaRHeLPdGfToAX91How1y-372YScUGaYSMcueTwKH05HYe1jWkzew&usqp=CAE"
    ],
    "productName": "Inspiron 15",
    "usp": "Sleek design with reliable performance."
  }
]



const apiUrl = 'http://localhost:8099/api/products/add';

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

async function postData(item) {
  try {
    const response = await fetch(apiUrl, {
      ...requestOptions,
      body: JSON.stringify(item),
    });

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
    } else {
      console.log(`Product added successfully: ${item.name}`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function addProducts() {
  for (const item of arrayData) {
    await postData(item);
    console.log("added item")
  }
}

addProducts();