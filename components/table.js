import {BiEdit, BiTrashAlt} from 'react-icons/bi';

export default function Table({empty, discussion}){
    return(
        <table id="tableId" className="min-w-full table-auto">
            <thead>
                <tr className= "bg-gray-800">
                    <th className="px-5 py-2">
                        <span className="text-gray-300">id</span>
                    </th>
                    <th className="px-5 py-2">
                       <span className="text-gray-300">discussion_title</span>
                    </th>
                    <th className="px-5 py-2">
                        <span className="text-gray-300">question</span>
                    </th>
                    <th className="px-5 py-2">
                        <span className="text-gray-300">tags</span>
                    </th>
                    <th className="px-5 py-2">
                        <span className="text-gray-300">Action</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                {
                    discussion.map((obj, i) => <Tr {...obj} key={i} />)
                }
            </tbody>
        </table>
    )
}

function Tr({id, discussion_title, question, tags}){

    const truncate = (input) => input?.length > 190 ? `${input.substring(0, 190)}...` : input;

    return (
        <>
            <tr>
                <td className="px-5 py-2 items-center"> 
                    <span className="text-center ml-2 font-semibold">{id || "Unknown"}</span>                       
                </td>
                <td className="px-5  py-2"> 
                    <span>{discussion_title || "Unknown"}</span>                       
                </td>
                <td className="px-5  py-2 break-all "> 
                    <div dangerouslySetInnerHTML={{ __html: truncate(question)}}/>                       
                </td>
                <td className="px-5  py-2"> 
                    <span>{tags || "Unknown"}</span>                       
                </td>
                <td className="px-5  py-2"> 
                    <button className="cursor"><BiEdit size={25}></BiEdit></button>   
                    <button className="cursor"><BiTrashAlt size={25} ></BiTrashAlt></button>                    
                </td>
            </tr>
        </>
    )
}

