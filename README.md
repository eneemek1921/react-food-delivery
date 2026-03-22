# Food Delivery App

A full-featured food delivery web application built with React. The project focuses on complex frontend logic — global cart management, state persistence, form validation, and map integration.

##Disclaimer

Created solely for educational purposes. It was not created for commercial purposes.

## ✨ Features

- **5 Restaurant Pages** — Burger King, KFC, Mak, I Love Sushi, and a placeholder
- **Product Filtering** — by category using `useMemo` for performance optimization
- **Global Cart** — built with `useReducer` and `useContext`
  - Add/remove items
  - Quantity limits (max 99 per item)
  - Local storage persistence
- **Address Form** — with validation and map display (maplibre-gl)
- **Payment Form** — credit card validation (16-digit, expiration, CVV)
- **Contact Form** — email and message validation
- **Local Storage** — cart and address data persist after page reload

## 🛠️ Tech Stack

- **React 18** — functional components, hooks
- **React Router v6** — routing and navigation
- **Context API + useReducer** — global state management
- **localStorage** — data persistence
- **react-hook-form** — form handling and validation
- **maplibre-gl** — interactive map
- **CSS Modules** — component-scoped styling
- **CSS Variables** — consistent theming

## 📁 Project Structure
src/
├── components/ # Reusable UI components (Cart, Menu)
├── contexts/ # Context providers (CartContext, AdressContext)
├── data/ # Static product data (5 restaurant menus)
├── pages/ # Page components (Home, BurgerKing, Kfc, etc.)
├── styles/ # Global styles and CSS variables
└── App.jsx # Main app with routing


## 🧠 Key Implementation Details

- **Cart Logic** — `useReducer` manages all cart actions (ADD, REMOVE, CLEAR) with quantity limits up to 99 items per product
- **Persistence** — `useEffect` + localStorage saves cart and address data automatically, restoring them after page reload
- **Performance** — `useMemo` prevents unnecessary re-renders during category filtering
- **Form Validation** — custom regex patterns for street names, building numbers, card details, and email
- **Map Integration** — maplibre-gl displays a static map on the address page

## ⏱️ Development Time

- **Pure coding time:** ~8–10 hours
- **Total (with breaks):** 2 days

## 📌 Notes

- **Desktop-only** — no mobile responsiveness (focus on logic, not layout)
- All logic is fully functional with static data (no backend)
- Images and product data are sourced from "Яндекс Еда" for educational purposes only

---
