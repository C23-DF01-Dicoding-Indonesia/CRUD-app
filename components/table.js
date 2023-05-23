import {BiEdit, BiTrashAlt} from "react-icons/bi";
import data from '../database/data.json'

export default function Table(){
    return(
        <table className="min-w-full table-auto">
            <thead>
                <tr className= "bg-gray-800">
                    <th className="px-16 py-2">
                        <span className="text-gray-300">id</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-300">course_id</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-300">module_name</span>
                    </th>
                    <th className="px-16 py-2">
                      <span className="text-gray-300">tutorial_id</span>
                    </th>
                    <th className="px-16 py-2">
                       <span className="text-gray-300">discussion_title</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-300">question</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-300">tags</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-300">Action</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                {
                    data.map((obj, i) => <Tr {...obj} key={i}/>)
                }
            </tbody>
        </table>
    )
}

function Tr({id, course_id, module_name, tutorial_id, discussion_title, question, tags}){
    return (
        <>
        <tr>
                    <td className="px-16 py-2 items-center"> 
                        <span className="text-center ml-2 font-semibold">{id || "Unknown"}</span>                       
                    </td>
                    <td className="px-16 py-2 ">    
                        <span>{course_id}</span>                       
                    </td>
                    <td className="px-16  py-2"> 
                        <span>{module_name || "Unknown"}</span>                       
                    </td>
                    <td className="px-16  py-2"> 
                        <span>{tutorial_id || "Unknown"}</span>                       
                    </td>
                    <td className="px-16  py-2"> 
                        <span>{discussion_title || "Unknown"}</span>                       
                    </td>
                    <td className="px-16  py-2"> 
                        <span>{question || "Unknown"}</span>                       
                    </td>
                    <td className="px-16  py-2"> 
                        <span>{tags || "Unknown"}</span>                       
                    </td>
                    <td className="px-16  py-2"> 
                        <button className="cursor"><BiEdit size={25}></BiEdit></button>   
                        <button className="cursor"><BiTrashAlt size={25} ></BiTrashAlt></button>                    
                 
                    </td>
                </tr>
        </>
    )
}