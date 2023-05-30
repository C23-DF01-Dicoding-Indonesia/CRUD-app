import React from 'react';
import Head from 'next/head';
import { BiPlus } from 'react-icons/bi';
import Table from '../components/table';
import Form from '../components/form';
import SearchInput from '../components/SearchInput'
import {useState, useEffect} from 'react'
import fetcher from '../lib/utils/fetcher'



export default function Home() {

  const addHandler = () => {
    if(visible == false){
      setVisible(true);
    }else setVisible(false);
  }

  const[discussion, setDiscussion] = useState([]);
  const [empty, setEmpty] = useState(false);

  const[visible, setVisible] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      try {

        const { data: { discussions } } = await fetcher('http://localhost:9000/discussion');
        console.log(discussions);
        setDiscussion(discussions)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[])
 

  return (
    <>
      <Head>
        <title>CRUD App</title>
        <meta name='description' content='Generated by C23-DF01'/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className="py-5">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">CRUD App Discussion Forum</h1>

        <div className="container mx-auto flex justify-between py-5">
          <div className="left flex gap-3">
              <button onClick={addHandler} className="flex bg-indigo-500 text-white px-5 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-400">
              Add Discussion
              <span className="px-1"><BiPlus size={23} /></span>
            </button>
          </div>
          <SearchInput/>
        </div>


        {/* Form */}
          { visible ? <Form ></Form> : <></>}
        {/* Table */}
        <div className="container mx-auto">
          {discussion && Object.keys(discussion).length > 0 ? (
              <Table empty={empty} discussion={discussion} />
            ) : (
              <p>No discussion found.</p>
            )}
        </div>
      </main>
    </>
  );
}
