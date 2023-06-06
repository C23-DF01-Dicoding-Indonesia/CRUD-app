import AddDiscussionForm from './addDiscussionForm'
import UpdateDiscussionForm from './updateDiscussionForm'
import {useState, useEffect} from 'react'


export default function Form(props){
    const flag = true;
    return(
        <>
            <div className="container mx-auto py-5">
                {flag ? <AddDiscussionForm onDiscussionAdded={props.onDiscussionAdded} ></AddDiscussionForm> : <UpdateDiscussionForm></UpdateDiscussionForm>}
            </div>
        </>
    )

}