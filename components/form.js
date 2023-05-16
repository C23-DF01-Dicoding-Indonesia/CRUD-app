import { useReducer } from "react"
import { BiPlus } from "react-icons/bi"
import Success from './success'
import Bug from './bug'

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

export default function Form(){

    const [formData, setFormData] = useReducer(formReducer, {})

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.keys(formData).length==0) return console.log("There's no data!")
        console.log(formData)
    }

    if(Object.keys(formData).length > 0) return <Success message={"Discussion Added"}></Success>

    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="course_id" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Course ID"></input>
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="module_name" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Module Name"></input>
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="tutorial_id" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Tutorial ID"></input>
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="discussion_title" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Discussion Title"></input>
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="question" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Question"></input>
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="tag" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Tag"></input>
            </div>

            <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">Add <span className="px-1"><BiPlus size={24}></BiPlus></span></button>
        </form>
    )
}