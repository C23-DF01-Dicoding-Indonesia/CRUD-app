import React from 'react';
import Head from 'next/head';
import Button from 'react-bootstrap/Button';


export default function DiscussionDetails(){

    // const[discussion, setDiscussion] = useState([]);
    // const [empty, setEmpty] = useState(false);
  
    // const[visible, setVisible] = useState(false);
   
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
  
    //       const { data: { discussions } } = await fetcher(`http://localhost:9000/discussion/${id}`);
    //       console.log(discussions);
    //       setDiscussion(discussions)
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
    //   fetchData();
    // },[])


    return (
    <>
      <Head>
        <title>CRUD App</title>
        <meta name="description" content="Generated by C23-DF01" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="py-5">
        <Button variant="primary" size="sm">
          Small button
        </Button>   
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">CRUD App Discussion Forum</h1>
        <h1>id</h1>
        <h1>course_id</h1>
        <h1>module_name</h1>
        <h1>tutorial_id</h1>
        <h1>discussion_title</h1>
        <h1>question</h1>
        <h1>tags</h1>
        
    

       
      </main>
    </>
    )


}


