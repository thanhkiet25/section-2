import React from 'react'
const add = (a, b) =>{
  return a + b;
}
const subtract = (a, b) =>{
  return a - b;
}
const multiply = (a, b) =>{
  return a * b;
}
const divide = (a, b) =>{
  return a / b;
}
export default function Calculation() {
  const a = 10;
  const b = 10;
  return (
   <>
   <h1>Danh sách kết quả</h1>
   <ul>
    <li>{a} + {b} = {add(a, b)}</li>
    <li>{a} - {b} = {subtract(a, b)}</li>
    <li>{a} * {b} = {multiply(a, b)}</li>
    <li>{a} / {b} = {divide(a, b)}</li>
   </ul>
   </>
  )
}
