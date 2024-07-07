import { sayHelloProps } from "./types";

export function sayHello({name}: sayHelloProps) {
    console.log(`Hello ${name}`);
}