import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function CommentForm({ handlePosting }){

    const [formData, setFormData] = useState({
        fullNames: '',
        email: '',
        comments: '',
    })

    function handleSubmit(e){
        e.preventDefault();
        fetch('https://phase2-api.herokuapp.com/userdata',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => {
            handlePosting(data)
        })

        setFormData({
            fullNames: '',
            email: '',
            comments: '',
        })
    }

    function handleChange(e){
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    }
    return(
        <div>
            <Form >
            <Form.Group controlId="formNameX">
                <Form.Label>Full Name</Form.Label>
                <Form.Control name="fullNames" type="text" value={formData.fullNames} placeholder="Enter your full name..." onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="formEmailX">
                <Form.Label>Email Address</Form.Label>
                <Form.Control name="email" type="email" value={formData.email} placeholder="Enter your email address..." onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="formCommentZ" controlId="formCommentX">
                <Form.Label>Leave us a comment</Form.Label>
                <Form.Control name="comments" type="text" as="textarea" rows="3" value={formData.comments} placeholder="Leave us a comment..." onChange={handleChange}/>
            </Form.Group>
            <br/>
            <Button onClick={handleSubmit} type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}

export default CommentForm;