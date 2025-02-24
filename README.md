# 🛠️ @mehasoft/dd

`@mehasoft/dd` is a **debugging tool** for Node.js, similar to Laravel's `dd()` function. It provides colorful and detailed console output to make error detection easier.

![npm](https://img.shields.io/npm/v/%40mehasoft%2Fdd)
![license](https://img.shields.io/npm/l/%40mehasoft%2Fdd)

---

## 🚀 Installation

To add it to your Node.js project:

```bash
npm i -D @mehasoft/dd
```

📌 Usage (Es6)
```javascript
import { dd } from "@mehasoft/dd";

const user = {
  name: "Mevlüt",
  age: 22,
  skills: ["JavaScript", "Node.js", "Laravel"]
};

dd(user); // Displays a formatted, colorized output and halts the process
```

📌 Usage (CommonJS)
```javascript
const { dd } = require("@mehasoft/dd");

const user = {
  name: "Mevlüt",
  age: 22,
  skills: ["JavaScript", "Node.js", "Laravel"]
};

dd(user); // Displays a formatted, colorized output and halts the process
```

Alternatively, you can pass multiple arguments:

```javascript
dd("An error occurred!", { errorCode: 500 }, ["Error details"]);
```

## 🎨 Example Output
You will see a **colorized** and **formatted** output in the console:

```plaintext
🛑 DEBUG DUMP
{
  name: 'Mevlüt',
  age: 22,
  skills: [ 'JavaScript', 'Node.js', 'Laravel' ]
}
```

## 📄 License
This project is licensed under the MIT License. For more details, please check the `LICENSE` file.