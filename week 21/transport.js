class Transport {
  constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
  }

  getInfo() {
    return `Type: ${this.type}, Brand: ${this.brand}`;
  }

  getPrice() {
    return `Price: $${this.price}`;
  }
}

class Car extends Transport {
  constructor(type, price, brand, doors) {
    super(type, price, brand);
    this.doors = doors;
  }

  getDoorsCount() {
    return `Doors: ${this.doors}`;
  }
}

class Bike extends Transport {
  constructor(type, price, brand, maxSpeed) {
    super(type, price, brand);
    this.maxSpeed = maxSpeed;
  }

  getMaxSpeed() {
    return `Max Speed: ${this.maxSpeed} km/h`;
  }
}

const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image: "https://realnoevremya.ru/uploads/news/51/1f/cdfe7b34f9e360b1.jpg",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFybGV5JTIwZGF2aWRzb258ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image:
      "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
  },
];

const vehicleContainer = document.getElementById("vehicle-container");

data.forEach((item) => {
  let vehicle;

  if (item.type === "car") {
    vehicle = new Car(item.type, item.price, item.brand, item.doors);
  } else if (item.type === "bike") {
    vehicle = new Bike(item.type, item.price, item.brand, item.maxSpeed);
  }

  const card = document.createElement("div");
  card.className = "vehicle-card";

  const image = document.createElement("img");
  image.src = item.image;
  card.appendChild(image);

  const info = document.createElement("p");
  info.textContent = vehicle.getInfo();
  card.appendChild(info);

  const price = document.createElement("p");
  price.textContent = vehicle.getPrice();
  card.appendChild(price);

  if (vehicle instanceof Car) {
    const doorsCount = document.createElement("p");
    doorsCount.textContent = vehicle.getDoorsCount();
    card.appendChild(doorsCount);
  } else if (vehicle instanceof Bike) {
    const maxSpeed = document.createElement("p");
    maxSpeed.textContent = vehicle.getMaxSpeed();
    card.appendChild(maxSpeed);
  }

  vehicleContainer.appendChild(card);
});
