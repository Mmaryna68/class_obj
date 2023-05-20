// Определение базового класса Transport
class Transport {
  constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
  }

  // Метод для получения информации о транспорте
  getInfo() {
    return `Type: ${this.type}, Brand: ${this.brand}`;
  }

  // Метод для получения цены транспорта
  getPrice() {
    return `Price: $${this.price}`;
  }
}

// Класс Car, наследующийся от Transport
class Car extends Transport {
  constructor(type, price, brand, doors) {
    super(type, price, brand);
    this.doors = doors;
  }

  // Метод для получения количества дверей
  getDoorsCount() {
    return `Doors: ${this.doors}`;
  }
}

// Класс Bike, наследующийся от Transport
class Bike extends Transport {
  constructor(type, price, brand, maxSpeed) {
    super(type, price, brand);
    this.maxSpeed = maxSpeed;
  }

  // Метод для получения максимальной скорости
  getMaxSpeed() {
    return `Max Speed: ${this.maxSpeed} km/h`;
  }
}

// Массив данных о транспорте
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

// Получаем ссылку на контейнер для транспортных средств
const vehicleContainer = document.getElementById("vehicle-container");

// Перебор по каждому элементу массива данных и создание карточек
data.forEach((item) => {
  let vehicle;

  // Проверяем тип транспортного средства
  if (item.type === "car") {
    // Создаем экземпляр класса Car для автомобилей
    vehicle = new Car(item.type, item.price, item.brand, item.doors);
  } else if (item.type === "bike") {
    // Создаем экземпляр класса Bike для мотоциклов
    vehicle = new Bike(item.type, item.price, item.brand, item.maxSpeed);
  }

  // Создаем элемент-контейнер для карточки транспортного средства
  const card = document.createElement("div");
  card.className = "vehicle-card";

  // Создаем элемент img для отображения изображения
  const image = document.createElement("img");
  image.src = item.image;
  card.appendChild(image);

  // Создаем элемент p для отображения информации о транспортном средстве
  const info = document.createElement("p");
  info.textContent = vehicle.getInfo();
  card.appendChild(info);

  // Создаем элемент p для отображения цены транспортного средства
  const price = document.createElement("p");
  price.textContent = vehicle.getPrice();
  card.appendChild(price);

  // Проверяем тип транспортного средства
  if (vehicle instanceof Car) {
    // Для автомобилей добавляем элемент p для отображения количества дверей
    const doorsCount = document.createElement("p");
    doorsCount.textContent = vehicle.getDoorsCount();
    card.appendChild(doorsCount);
  } else if (vehicle instanceof Bike) {
    // Для велосипедов добавляем элемент p для отображения максимальной скорости
    const maxSpeed = document.createElement("p");
    maxSpeed.textContent = vehicle.getMaxSpeed();
    card.appendChild(maxSpeed);
  }

  // Добавляем карточку транспортного средства в контейнер
  vehicleContainer.appendChild(card);
});
