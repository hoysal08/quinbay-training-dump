const users = [
  {
    "username": "Alice",
    "userEmail": "Alice@gmail.com",
    "password": "Alice"
  },
  {
    "username": "Bob",
    "userEmail": "Bob@gmail.com",
    "password": "Bob"
  },
  {
    "username": "Charlie",
    "userEmail": "Charlie@gmail.com",
    "password": "Charlie"
  },
  {
    "username": "David",
    "userEmail": "David@gmail.com",
    "password": "David"
  },
  {
    "username": "Eva",
    "userEmail": "Eva@gmail.com",
    "password": "Eva"
  },
  {
    "username": "Frank",
    "userEmail": "Frank@gmail.com",
    "password": "Frank"
  },
  {
    "username": "Grace",
    "userEmail": "Grace@gmail.com",
    "password": "Grace"
  },
  {
    "username": "Hank",
    "userEmail": "Hank@gmail.com",
    "password": "Hank"
  },
  {
    "username": "Ivy",
    "userEmail": "Ivy@gmail.com",
    "password": "Ivy"
  },
  {
    "username": "Jack",
    "userEmail": "Jack@gmail.com",
    "password": "Jack"
  },
  {
    "username": "Kate",
    "userEmail": "Kate@gmail.com",
    "password": "Kate"
  },
  {
    "username": "Leo",
    "userEmail": "Leo@gmail.com",
    "password": "Leo"
  },
  {
    "username": "Mia",
    "userEmail": "Mia@gmail.com",
    "password": "Mia"
  },
  {
    "username": "Noah",
    "userEmail": "Noah@gmail.com",
    "password": "Noah"
  },
  {
    "username": "Olivia",
    "userEmail": "Olivia@gmail.com",
    "password": "Olivia"
  }
]


const apiUrl = 'http://10.20.3.72:8051/api/users/register';

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
      console.log(`Product added successfully: ${item.username}`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function addProducts() {
  for (const item of users) {
    await postData(item);
    console.log("added item",item.username)
  }
}
 addProducts()