'use client';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';

const SearchPage = () => {

    const search = useSearchParams();
    const seacrhQuery = search ? search.get('q') : null;
    const encodedSearchQuery = encodeURI(seacrhQuery || '');
    console.log('Search Params: ', encodedSearchQuery);
    return (
        <>
            <Head>
                <title>CRUD App search</title>
                <meta name='description' content='Generated by C23-DF01'/>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <main className="py-5">
                <h1 className="text-xl md:text-5xl text-center font-bold py-10">CRUD App Discussion Forum</h1>
                <div>SEARCH PAGE</div>
            </main>
        </>
    );
};

export default SearchPage;