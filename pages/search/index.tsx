'use client';
import SearchInput from '@/components/SearchInput';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';
import DiscussionCard from '@/components/DiscussionCard';
import data from '@/database/data.json';
import {useState, useEffect} from 'react';


const SearchPage = async () => {

    const [searchResults, setSearchResults] = useState(null);
    const discussion = data;

    useEffect(() => {
        const fetchData = async () => {
          try {
            const search = useSearchParams();
            const searchQuery = search ? search.get('q') : null;
            const encodedSearchQuery = encodeURI(searchQuery || '');

            const response = await fetch(`http://localhost:9000/search?q=${encodedSearchQuery}`);
            const data = await response.json();
            setSearchResults(data);
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
                <h1 className="text-xl md:text-5xl text-center font-bold py-10">CRUD App Discussion Forum</h1>
                <div className="container mx-auto flex justify-end py-5">
                    <SearchInput/>
                </div>
                <div className="container mx-auto flex flex-wrap justify-center">
                {
                    discussion.map((obj, i) => <DiscussionCard {...obj} key={i} />)
                }
                {/* <DiscussionCard
                    discussionTitle="Discussion Title 2"
                    question="Question 2: loremdddddddddddddddddddddd ds dasdsk  ipsum"
                    tags={['Tag 4', 'Tag 5', 'Tag 6']}
                    />
                <DiscussionCard
                    discussionTitle="Discussion Title 1"
                    question="Question 1: asdsadas"
                    tags={['Tag 1', 'Tag 2', 'Tag 3']}
                    />
                    <DiscussionCard
                    discussionTitle="Discussion Title 2"
                    question="Question 2: lorem ipsum"
                    tags={['Tag 4', 'Tag 5', 'Tag 6']}
                    /> */}
                    
                </div> 
                

   
            </main>
        </>
    );
};

  
export default SearchPage;
