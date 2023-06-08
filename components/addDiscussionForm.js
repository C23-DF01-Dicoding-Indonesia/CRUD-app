import { useReducer } from 'react'
import { BiPlus } from 'react-icons/bi'
import {useState, useEffect} from 'react'

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value
  }
}

export default function AddDiscussionForm(props) {
  const [formData, setFormData] = useReducer(formReducer, {})
  const [isFetching, setIsFetching] = useState(false);

    console.log(JSON.stringify(formData))

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(formData).length === 0) {
      console.log("There's no data!")
    } else {
      console.log(formData)
      // Perform any further processing or submission here
      // Example: <Success message={"Discussion Added"}></Success>
      setIsFetching(true);
      try {
        await fetch("http://localhost:9000/discussion", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body:  JSON.stringify(formData),
        });
  
        if (typeof window !== 'undefined') {
          window.location.href = '/';
        }
      } catch (error) {
        if (typeof window !== 'undefined') {
          alert(error.message);
        }
      } finally {
        setIsFetching(false);
      }
      props.onDiscussionAdded();
    }
  }

  return (
    <form className="grid lg:grid-cols-2 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input type="text" onChange={setFormData} name="discussion_title" className="border w-full px-5 py-3 focus:outline-none rounded-md focus:placeholder-gray-300 focus:border-indigo-300" placeholder="Discussion Title"></input>
      </div>
      <div className="input-type">
        <input type="text" onChange={setFormData} name="question" className="border w-full px-5 py-3 focus:outline-none rounded-md focus:placeholder-gray-300 focus:border-indigo-300" placeholder="Question"></input>
      </div>
      <button type='submit' className="flex justify-center text-md w-min bg-green-500 text-white px-16 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">Add <span className="px-1"><BiPlus size={24}></BiPlus></span></button>
    </form>
  )
}


