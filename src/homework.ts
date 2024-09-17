/*
 * Add two numbers. If b is not provided, assign b to 0.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of a and b as a number
 */
export const addTwoNumbers = (a: number, b?: number): number => {   
  return a + (b ?? 0);                                             
};
// changing the output to have type number 
// setting b as 0, if undefined

// /**
//  * Calculates the total sum of an array of numbers.
//  * @param values - An array of numbers or strings.
//  * @returns The sum of the numbers.
//  */
export const sumArray = (numbers: (number | string)[]): number => {
  return numbers.reduce((acc: number, curr) => acc + Number(curr), 0);    
};
//the accumulator will be number type and will be the output, current value can be either string or number 
//for adding the values, need to convert current value to Number()

// Create type "Person" with the following properties:
// - name: string
// - age: number
export type Person = {
  name: string;
  age: number;
};
//specifying types for both name and age

// Create type "User" which extends "Person" and adds the following properties:
// - type: 'user' (literal type)
export interface User extends Person {
  type: 'user';
};
//extending Person to User and passing type 

// Create type "Admin" which extends "Person" and adds the following properties:
// - isSuperAdmin: boolean
export type Admin = Person & {
  isAdmin: boolean;
};
//using a different method from the lecture notes to extend Type Alias using intersection operator &


// Create a type "AllPeople" which is a union of "Person", "User", and "Admin"
export type AllPeople = Person | User | Admin;
//no changes needed here, the type includes a union of three other types 


// Add function "isAdmin" that returns true if "u" is an admin
export const isAdmin = (u: AllPeople): boolean => {
  if ("isAdmin" in u && u.isAdmin === true) {
    return true;
  }
  else return false;
};
//specify the type for isAdmin should be boolean 
//if the type "isAdmin" present in the passed argument it's a type Admin 
//additionally, if the property isAdmin within Admin is true, return True 

// Add function "isUser" that returns true if "u" is a user
export const isUser = (u: AllPeople) => {
  if ("type" in u) {
    return true;
  }
  else return false;
};
//similar to above, if there is a property "type", the type is User

/**
 * If a "Admin" calls userGreetingMessage, return "Hello, {name}. You are an admin."
 * If a "User" calls userGreetingMessage, return "Hello, {name}. You are a user."
 * If a "Person" calls userGreetingMessage, return "Hello, {name}. You do not have access."
 * @param user - The user to greet
 * @returns A greeting message
 */
export const userGreetingMessage = (u: AllPeople) => {
  if ("type" in u) {
    return `Hello, ${u.name}. You are a user.`;
  } 
  else if ("isAdmin" in u && u.isAdmin === true) {
    return `Hello, ${u.name}. You are an admin.`;
  }
  else {
    return `Hello, ${u.name}. You do not have access.`;
  }
};
//merging the tests above into one function
//going through if and else if cases for Admin and User because they have identifyable fields
//else returning Person type, no user, no admin properties
