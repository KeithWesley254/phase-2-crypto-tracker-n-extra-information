import React from "react";

function FeedBackComments({ commentEd, deleteComm }){

    const displayComments = commentEd.map((comment) => {

        function handleDelete(){
            deleteComm(comment.id)
        }
        return (
            <div key={comment.id}>
                <h2><b>{comment.fullNames}</b></h2>
                <p><i>-{comment.comments}</i></p>
                <button onClick={handleDelete}>Delete</button>
            </div>
        )
    })
    
    return (
        <section>
            <h1>What People Are Saying:</h1>
            {displayComments}
        </section>
    )
}

export default FeedBackComments;