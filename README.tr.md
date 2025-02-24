# 🛠️ @mehasoft/dd

`@mehasoft/dd`, Laravel'in `dd()` fonksiyonuna benzeyen, Node.js için geliştirilmiş bir **debugging (hata ayıklama)** aracıdır. Konsola renkli ve detaylı çıktı vererek hataları tespit etmeyi kolaylaştırır.

![npm](https://img.shields.io/npm/v/%40mehasoft%2Fdd)
![license](https://img.shields.io/npm/l/%40mehasoft%2Fdd)

---

## 🚀 Kurulum

Node.js projenize eklemek için:

```bash
npm i -D @mehasoft/dd
```

## 📌 Kullanım (ES6)
```javascript
import { dd } from "@mehasoft/dd";

const user = {
  name: "Mevlüt",
  age: 22,
  skills: ["JavaScript", "Node.js", "Laravel"]
};

dd(user); // Çıktıyı renklendirilmiş bir şekilde gösterir ve süreci durdurur
```

## 📌 Kullanım (CommonJS)
```javascript
const { dd } = require("@mehasoft/dd");

const user = {
  name: "Mevlüt",
  age: 22,
  skills: ["JavaScript", "Node.js", "Laravel"]
};

dd(user); // Çıktıyı renklendirilmiş bir şekilde gösterir ve süreci durdurur
```

Alternatif olarak birden fazla argüman da iletebilirsiniz:

```javascript
dd("Bir hata oluştu!", { errorCode: 500 }, ["Hata detayları"]);
```

## 🎨 Örnek Çıktı
Konsolda **renklendirilmiş** ve **formatlanmış** bir çıktı göreceksiniz:

```plaintext
🛑 DEBUG DUMP
{
  name: 'Mevlüt',
  age: 22,
  skills: [ 'JavaScript', 'Node.js', 'Laravel' ]
}
```

## 📄 Lisans
Bu proje MIT lisansı ile lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına göz atabilirsiniz.