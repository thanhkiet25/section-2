import React from 'react'

export default function UserInfo() {
    const products = [
        {
            name: "Nguyễn Văn A ",
            sex: "Nam",
            birthday: "06/03/2024",
            email: "thanhkiet255@gmail.com",
            address: "Tây Ninh",
        },
    ];
  return (
    <>
    <h1>Thông tin cá nhân</h1>
    
        {products.map((product) => (
            <ul>
           <li>Họ và tên: {product.name}</li> 
           <li>Giới tính: {product.sex}</li> 
           <li>Ngày sinh: {product.birthday}</li> 
           <li>Email: {product.email}</li> 
           <li>Địa chỉ: {product.address}</li> 
           </ul>
        ))}
  
    </>
  )
}
