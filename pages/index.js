import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Layout from 'components/layout';
import { useState } from 'react';
import useSWR from 'swr';
export default function Home() {
const [input,setInput] = useState('');
const handleInputChange = (e)=>{
  console.log(e.target.value);
  setInput(e.target.value);
}
const handleSubmit = (e) =>{
  e.preventDefault();
}
  return (
    <>
    <Layout>
      <h1>
        Weather app
      </h1>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder="location" onChange={handleInputChange} value={input}/>
        <button type="submit" >Submit</button>
      </form>
    </Layout>



  
  </>
  
  )
}
