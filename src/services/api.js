import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/search",
});

export const userData = [
  {
    id: 0,
    email: "nubel@me.com",
    password: "123456789",
  },
  {
    id: 1,
    email: "roberio@hotmail.com",
    password: "1234567890",
  },
  {
    id: 2,
    email: "nubelsondev@hotmail.com",
    password: "12345678910",
  },
];
