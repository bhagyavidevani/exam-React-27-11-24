import React from 'react';

export default function UserProfileCard({title,name,email,imgurl,number,course}) {
  return (
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column', alignItems:'center' , textAlign:'left' , borderStyle:'solid', borderRadius:"20px" , borderWidth:"1px"}} >
      <h1>{title}</h1>
      <img src={imgurl} alt='userprofile' width="250px" height="auto" style={{borderRadius:'20px',boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}/>
      <h2>Name:- {name}</h2>
      <p><b>Email hgjhygkjygl:-</b> {email}</p>
      <p><b>Mo number</b> :-{number}</p>
      <p><b>course:-</b>{course}</p>
    </div>
  )
}
