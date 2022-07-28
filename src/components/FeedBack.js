import React, { useState, useEffect } from "react";
import FeedBackComments from "./FeedBackComments";
import CommentForm from "./CommentForm";

function FeedBack(){

    const [commentsZ, setCommentsZ] = useState([])

    useEffect(() => {
        fetch('https://phase2-api.herokuapp.com/userdata')
        .then(r => r.json())
        .then(data => setCommentsZ(data))
    }, []);

    function handlePosting(data){
        setCommentsZ([...commentsZ, data])
    }

    function deleteComm(id){
        fetch(`https://phase2-api.herokuapp.com/userdata/${id}`,{
            method: "DELETE",
        })
        .then(r => r.json())
        .then(() => {
            const goThru = commentsZ.filter((comment) => comment.id !== id)
                setCommentsZ(goThru)
            })
        }

    return (
        <div>
            <CommentForm handlePosting={handlePosting}/>
            <br/>
            <FeedBackComments commentEd={commentsZ} deleteComm={deleteComm}/>
        </div>  
    )
}

export default FeedBack;