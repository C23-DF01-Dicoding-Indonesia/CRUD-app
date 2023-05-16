import {BiEdit, BiTrashAlt} from "react-icons/bi";

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
                <tr>
                    <td className="px-16 py-2 flex flex-row items-center"> 
                        <span className="text-center ml-2 font-semibold">123</span>                       
                    </td>
                    <td className="px-16 py-2 "> 
                        <span>123</span>                       
                    </td>
                    <td className="px-16  py-2"> 
                        <span>123</span>                       
                    </td>
                    <td className="px-16  py-2"> 
                        <span>123</span>                       
                    </td>
                    <td className="px-16  py-2"> 
                        <span>123</span>                       
                    </td>
                    <td className="px-16  py-2"> 
                        <span>123</span>                       
                    </td>
                    <td className="px-16  py-2"> 
                        <span>123</span>                       
                    </td>
                    <td className="px-16  py-2"> 
                        <button className="cursor"><BiEdit size={25}></BiEdit></button>   
                        <button className="cursor"><BiTrashAlt size={25} ></BiTrashAlt></button>                    
                 
                    </td>
                </tr>
            </tbody>
        </table>
    )
}