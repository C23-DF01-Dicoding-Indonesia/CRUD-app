import {BiEdit, BiTrashAlt} from 'react-icons/bi';
import dataasd from '../database/data.json'


export default function Table({empty, discussion}){
    // function rowHandlers() {
    //     var table = document.getElementById("tableId");
    //     var rows = table.getElementsByTagName("tr");
    //     for (i = 0; i < rows.length; i++) {
    //         var currentRow = table.rows[i];
    //         var createClickHandler = 
    //             function(row) 
    //             {
    //                 return function() { 
    //                                         var cell = row.getElementsByTagName("td")[0];
    //                                         var id = cell.innerHTML;
    //                                         alert("id:" + id);
    //                                  };
    //             };
    
    //         currentRow.onclick = createClickHandler(currentRow);
    //     }
    // }
    
    console.log(discussion)
    // window.onload = rowHandlers();
    
  


    return(
        <table id="tableId" className="min-w-full table-auto">
            <thead>
                <tr className= "bg-gray-800">
                    <th className="px-5 py-2">
                        <span className="text-gray-300">id</span>
                    </th>
                    <th className="px-5 py-2">
                        <span className="text-gray-300">course_id</span>
                    </th>
                    <th className="px-5 py-2">
                        <span className="text-gray-300">module_name</span>
                    </th>
                    <th className="px-5 py-2">
                      <span className="text-gray-300">tutorial_id</span>
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
                    // notes.map((obj, i) => <Tr {...obj} key={i}/>)
                }
            </tbody>
        </table>
    )
}

function Tr({id, course_id, module_name, tutorial_id, discussion_title, question, tags}){
    
    const handleClick = () => {
        if (window) {
            window.location.href = `/${id}/`;
          }
    };
    const truncate = (input) => input?.length > 150 ? `${input.substring(0, 150)}...` : input;

    return (
        <>
            <tr onClick={handleClick}>
                <td className="px-5 py-2 items-center"> 
                    <span className="text-center ml-2 font-semibold">{id || "Unknown"}</span>                       
                </td>
                <td className="px-5 py-2 ">    
                    <span>{course_id}</span>                       
                </td>
                <td className="px-5  py-2"> 
                    <span>{module_name || "Unknown"}</span>                       
                </td>
                <td className="px-5  py-2"> 
                    <span>{tutorial_id || "Unknown"}</span>                       
                </td>
                <td className="px-5  py-2"> 
                    <span>{discussion_title || "Unknown"}</span>                       
                </td>
                <td className="px-5  py-2 break-all"> 
                    <span>{truncate(question) || "Unknown"}</span>                       
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

