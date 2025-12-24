import { redirect } from "react-router-dom";

export function isLoggedIn() {
  return localStorage.getItem("token");
}

export function login() {
  localStorage.setItem("token", "fake-token");
}

export function logout() {
  localStorage.removeItem("token");
}

// utils/auth.js
export function requireAuth() {
  const token = localStorage.getItem("token");

  if (!token) {
    throw redirect("/login");
  }

  return true;
}
