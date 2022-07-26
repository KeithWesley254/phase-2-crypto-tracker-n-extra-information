import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import FeedBackComments from "./FeedBackComments";

function FeedBack(){
    const [formData, setFormData] = useState({
        fullNames: '',
        email: '',
        comments: '',
    })
    
    function handleChange(e){
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch('http://localhost:3003/userdata',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })

        setFormData({
            fullNames: '',
            email: '',
            comments: '',
        })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
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
            <Button type="submit">
                Submit
            </Button>
        </Form>
        <br/>
        <FeedBackComments />
        </div>  
    )
}

export default FeedBack;