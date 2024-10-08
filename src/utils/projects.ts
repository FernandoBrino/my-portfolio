import coffeeDelivery from "@/assets/coffee_delivery.jpeg";
import rickyAndMorty from "@/assets/ricky_and_morty.jpeg";
import orderApi from "@/assets/fastify.jpeg";

export const projects = [
  {
    id: "1",
    title: "Ricky Morty Catalog",
    description: "A Ricky and Morty characters catalog.",
    techs: [
      "Javascript",
      "Typescript",
      "React",
      "Next.js",
      "React-redux",
      "React-query",
      "React-hook-form",
      "Redux-toolkit",
      "React-loading-skeleton",
      "Zod",
    ],
    link: "https://desafio-green-acesso.vercel.app",
    image: rickyAndMorty,
  },
  {
    id: "2",
    title: "Coffee Delivery",
    description: "A basic coffee store.",
    techs: [
      "React",
      "Javascript",
      "Typescript",
      "Styled-components",
      "React-hook-form",
      "Zod",
      "Vite",
    ],
    link: "https://coffee-delivery-one-delta.vercel.app",
    image: coffeeDelivery,
  },
  {
    id: "3",
    title: "Order Api",
    description: "An order management api, wich aims requests management.",
    techs: [
      "Node.js",
      "Fastify",
      "Docker",
      "Javascript",
      "Typescript",
      "Vite",
      "Vitest",
      "Prisma",
      "PostgreSQL",
      "Supertest",
      "Bcrypt",
      "Jwt",
    ],
    link: "https://github.com/FernandoBrino/order-challenge-api",
    image: orderApi,
  },
];
