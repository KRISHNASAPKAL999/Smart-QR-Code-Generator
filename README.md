<div align="center">

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&duration=3000&pause=1000&color=00C2FF&center=true&vCenter=true&width=800&lines=Smart+QR+Code+Generator;Generate+QR+Codes+Instantly;Built+with+React+%2B+Vite;Created+by+Krishna+Sapkal)](https://git.io/typing-svg)

# ⚡ Smart QR Code Generator ⚡

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

### A modern, glassmorphism-inspired web application that generates QR codes instantly.

[**Explore the Live Demo**](#live-demo) · [**Report Bug**](https://github.com/your-username/smart-qr-generator/issues) · [**Request Feature**](https://github.com/your-username/smart-qr-generator/issues)

</div>

---

## 📖 Overview

Welcome to the **Smart QR Code Generator**! This application allows you to seamlessly generate QR codes from text, URLs, emails, and phone numbers. Designed with a sleek, modern glassmorphism UI, it's fast, responsive, and tailored for "Digital Heroes". 

---

## ✨ Features

- 🚀 **Instant QR Code Generation** - See your QR code as you type.
- 🔗 **URL Support** - Generate links for quick scanning.
- 📧 **Email Support** - Pre-fill email addresses.
- 📱 **Phone Number Support** - Direct dial integration.
- 🖼️ **Download PNG & SVG** - Export in your preferred format.
- 📋 **Copy Content** - Easily copy the generated data.
- 💾 **Local Storage History** - Keep track of your recent codes.
- 📱 **Mobile Responsive** - Perfect experience on any device.
- 🎨 **Modern Glassmorphism UI** - A stunning, premium visual design.

---

## 🌐 Live Demo

> **[Smart QR Code Generator Live on Vercel](#)**
*(Add your Vercel URL here)*

---

## 🛠️ Tech Stack

<div align="center">
  
| Technology | Description | Badge |
| :---: | :--- | :---: |
| **React.js** | Frontend UI Library | <img src="https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB" alt="React" /> |
| **Vite** | Next Generation Frontend Tooling | <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white" alt="Vite" /> |
| **JavaScript** | Core Programming Language | <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" /> |
| **CSS3** | Styling & Glassmorphism Effects | <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white" alt="CSS3" /> |
| **qrcode.react** | QR Code Generation Library | <img src="https://img.shields.io/badge/qrcode-library-blueviolet?style=flat" alt="QR Code Library" /> |
| **Vercel** | Hosting Platform | <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=flat&logo=vercel&logoColor=white" alt="Vercel" /> |

</div>

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KRISHNASAPKAL999/Smart-QR-Code-Generator.git
   ```
2. **Navigate to the directory:**
   ```bash
   cd smart-qr-generator
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

### Start Development Server

Run the app in development mode:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### 🏗️ Build

To build the app for production to the `dist` folder:
```bash
npm run build
```

---

## 🌍 Deployment

This project is configured for seamless deployment on **Vercel**.

1. Create an account on [Vercel](https://vercel.com/).
2. Connect your GitHub repository.
3. Import the `smart-qr-generator` repository.
4. Vercel will automatically detect **Vite** and configure the build settings.
5. Click **Deploy**.

---

## 📂 Project Structure

<details>
<summary><b>Click to expand project structure</b></summary>

```text
smart-qr-generator/
├── public/
│   ├── vite.svg
│   └── ...
├── src/
│   ├── components/
│   │   ├── QRGenerator.jsx
│   │   ├── QRGenerator.css
│   │   ├── HeroSection.css
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── ...
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vercel.json
└── vite.config.js
```

</details>

---

## 🧪 Testing

The following test cases have been performed manually to ensure reliability:

- ✅ **Text Input Test**: Verifies QR code updates immediately upon text entry.
- ✅ **URL Validation Test**: Ensures valid links are generated and scannable.
- ✅ **Email Format Test**: Verifies `mailto:` format works correctly.
- ✅ **Phone Number Test**: Verifies `tel:` format initiates calls on mobile.
- ✅ **Download Feature**: Ensures PNG and SVG downloads contain valid image data.
- ✅ **Copy to Clipboard**: Verifies that the input data is copied successfully.
- ✅ **Local Storage**: Confirms previous QR codes are saved and loaded correctly on refresh.
- ✅ **Mobile Responsiveness**: UI adapts correctly to various screen sizes without overflow.

---

## 🎯 Assignment Requirements Completed

- [x] Functional QR Generation
- [x] Full Name Displayed (Krishna Sapkal)
- [x] Email Displayed
- [x] "Built for Digital Heroes" Button/Section Included
- [x] Mobile Responsive Design
- [x] Vercel Deployment Ready

---

## 🔮 Future Enhancements

We are always looking to improve! Planned updates include:

- 🎨 **QR Color Customization**: Allow users to change foreground/background colors.
- 🖼️ **Logo Embedding**: Insert custom logos in the center of the QR code.
- 📊 **QR Analytics**: Track scans if generating dynamic URLs.
- 🌓 **Dark/Light Theme Toggle**: Seamlessly switch between UI themes.

---

## 🧑‍💻 Author

<div align="center">
  <a href="https://github.com/your-username">
    <img src="https://img.shields.io/badge/Krishna_Sapkal-000000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Profile" />
  </a>
   <a href="mailto:your.email@example.com">
    <img src="https://img.shields.io/badge/Email_Me-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</div>

---

<div align="center">
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="MIT License" />
  <br>
  <p>Made with ❤️ by <b>Krishna Sapkal</b></p>
</div>
