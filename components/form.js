import AddDiscussionForm from './addDiscussionForm'
import UpdateDiscussionForm from './updateDiscussionForm'

export default function Form(prop){
    const flag = true;

    return(
        <>
            <div className="container mx-auto py-5">
                {flag ? <AddDiscussionForm></AddDiscussionForm> : <UpdateDiscussionForm></UpdateDiscussionForm>}
            </div>
        </>
    )

}