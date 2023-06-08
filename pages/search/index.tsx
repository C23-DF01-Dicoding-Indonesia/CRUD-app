'use client';
import SearchInput from '@/components/SearchInput';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';
import DiscussionCard from '@/components/DiscussionCard';
import data from '@/database/data.json';
import {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';


const SearchPage = () => {

    const [searchResults, setSearchResults] = useState(null);
    const discussion = data;
    const search = useSearchParams();
    const router = useRouter();

    const onclick = () => {
        router.push(`/`);
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const searchQuery = search ? search.get('q') : null;
            const encodedSearchQuery = encodeURI(searchQuery || '');

            const response = await fetch(`http://localhost:9000/search?q=${encodedSearchQuery}`);
            const results = await response.json();
            setSearchResults(results.data);

          } catch(error){
            console.error(error);
          }
        }
        fetchData();        
    }, []);

    console.log('Search Results:', searchResults);

    return (
        <>
            <Head>
                <title>CRUD App search</title>
                <meta name='description' content='Generated by C23-DF01'/>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <main className="py-5">
                <h1 onClick={onclick} className="text-xl md:text-5xl text-center font-bold py-10">CRUD App Discussion Forum</h1>
                <div className="container mx-auto flex justify-end py-5">
                    <SearchInput/>
                </div>
                <div className="container mx-auto justify-center">
                {
                    <DiscussionCard searchResults={searchResults}></DiscussionCard>
                }
                    
                </div> 
                

   
            </main>
        </>
    );
};

  
export default SearchPage;