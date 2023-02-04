import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlNTY0NDQwMjg5ODA1ZDFmMmUzMzYiLCJ1c2VybmFtZSI6Imhhc2hpciIsInBhc3N3b3JkIjoiJDJiJDEwJE5SNUlCSnFiY1N4SW9TeHAxZjBXdk9GNC9vSnhaekl0Nk54anRQREdPRkZ2VnppV0Q1ODNTIiwiX192IjowLCJpYXQiOjE2NzU1MjQ2MzUsImV4cCI6MTY3NTUzMTgzNX0.c3fd9q3-Z0jMN4hs_bbtQP0a3qewN8ucL8ow6d2XPxA`,
  },
});
