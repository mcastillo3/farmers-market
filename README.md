---

# 🥕 Farmer's Market App

A simple JavaScript simulation of a Farmer's Market where users can create stands, assign farmers, stock produce, search for items, and even simulate purchases.

Built with object-oriented JavaScript for educational purposes and easily extendable into a web app later.

---

## 🚀 Features

- Create a customizable farmer's market
- Add multiple stands and assign farmers
- Stock each stand with a variety of produce
- Search for specific produce across the market
- Buy produce and update available inventory in real-time

---

## 🧑‍🌾 Example Produce

- Apples
- Carrots
- Tomatoes
- Lettuce
- Peaches

---

## 🛠️ Getting Started

### 1. Clone or Download the Project

```bash
git clone https://github.com/mcastillo3/farmers-market.git
cd farmers-market
```

Or just download the `.zip` and extract it.

### 2. Make Sure You Have Node.js

You’ll need [Node.js](https://nodejs.org/) installed to run this app.

Check if it’s installed:

```bash
node -v
```

### 3. Run the App

```bash
node index.js
```
or
```
npm run build
```

You’ll see logs showing inventory, search results, and updates after purchasing produce.

---

## 📂 File Structure

```
farmers-market/
├── .gitignore        # Ignored filed
└── index.js          # Main JavaScript logic
└── package-lock.json # Lockfileversion
└── package.json      # Dependencies
└── README.md         # Project documentation
```

---

## 🔍 Example Output

```text
Initial Inventory:
Stand 1: Farmer Alice
  - Apples: 30
  - Carrots: 50
Stand 2: Farmer Bob
  - Tomatoes: 40
  - Lettuce: 20
  - Peaches: 25

Searching for Tomatoes:
[ { farmer: 'Bob', standId: 2, quantity: 40 } ]

Bought 10 Tomatoes from Farmer Bob at Stand 2

Inventory After Purchase:
Stand 2: Farmer Bob
  - Tomatoes: 30
```

---

## 💡 Future Enhancements

- Add produce pricing and revenue tracking
- Turn it into a web-based UI using React or Vue
- Persist data using local storage or a simple backend
- Add a CLI menu to make it interactive

---

## 👨‍💻 Author

**Mauro** — 39-year-old software engineer with a strong background in sales, always looking for ways to make code practical and approachable.

---

## 📘 License

This project is open source and free to use under the [MIT License](LICENSE).

```

---

Let me know if you want to customize it with your GitHub link or even deploy this as a web app later. Would be a great little portfolio project!
