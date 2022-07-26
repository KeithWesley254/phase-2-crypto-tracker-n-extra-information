import React, { useState, useEffect } from "react";

function FeedBackComments(){

    const [commentsZ, setCommentsZ] = useState([])

    useEffect(() => {
        fetch('http://localhost:3003/userdata')
        .then(r => r.json())
        .then(data => setCommentsZ(data))
    }, []);

    // console.log(comments)

    const displayComments = commentsZ.map((comment) => {
        return (
            <div key={comment.id}>
                <h2><b>{comment.fullNames}</b></h2>
                <p><i>-{comment.comments}</i></p>
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