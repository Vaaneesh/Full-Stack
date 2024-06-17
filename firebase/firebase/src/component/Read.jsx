import React, { useState } from 'react'
import { getDatabase, ref, get,remove } from "firebase/database";
import app from "../firebaseConfig"
// import { setUserId } from 'firebase/analytics';
const Read = () => {
  let [users,setUsers]=useState([]);
 async function read(){
    let db=getDatabase();
    let dref=ref(db,"Users");
    let snapshot=await get(dref);
    // console.log(snapshot);
    if (snapshot.exists()) {
        console.log(Object.values(snapshot.val()));
        setUsers(Object.values(snapshot.val()))
      } else {
        console.log("No data available");
      }
    }
    async function deleteData(){
      let db=getDatabase();
      let userRef=ref(db,"Users");
      let delref=ref(db,"Users/-Nwt4KvIPukPlYDpZU3S");
      remove(delref).then(()=>{
        console.log("deleted");
      }).catch(err=>console.log(err));
      let snapshot=await get(userRef);
      // console.log(snapshot);
      if (snapshot.exists()) {
          console.log(Object.values(snapshot.val()));
          setUsers(Object.values(snapshot.val()))
        } else {
          console.log("No data available");
        }
      }

  return (
    <div>
     <button onClick={read}>read data</button> 
     {users.map((user,ind)=>{
      return(
        <>
          <div>{user.username}</div>
          <p>{user.email}</p>
          <button onClick={deleteData}>Delete</button>
        </>
      )
     })}
    </div>
  )
}

export default Read
