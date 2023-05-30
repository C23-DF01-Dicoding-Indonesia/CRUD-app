"use client";
import { BiSearch } from 'react-icons/bi';
import {useState} from 'react';
import { useRouter } from 'next/navigation';

const SearchInput = () => {
const [searchQuery, setSearchQuery ] = useState('');
const router = useRouter();

const onSearch = (event) => {
    event.preventDefault();

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
};

   return (
    <form onSubmit={onSearch}>
        <div className='relative flex items-center text-gray-400 focus-within:text-gray-300'>
            <input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder='What are you looking for?' className='w-72 pr-5 pl-12 py-2 placeholder-gray-400 text-black rounded-md border-2 focus:outline-none focus:border-gray-400 focus:placeholder-gray-300'/>
            <span className='w-5 h-5 absolute ml-5 pointer-events-none'><BiSearch size={23} /></span>
        </div>
    </form>
   );
};

export default SearchInput;