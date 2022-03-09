import React, { useState } from 'react';
import {Button, Modal, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

export default function LibraryModal({listItem}) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
  	<>
	  	<div className="giant-button" onClick={handleShow} onKeyDown={handleShow} role="button" tabIndex={0}>
	  	GET STARTED NOW!
	  	</div>
	  	<Modal 
				show={show} 
				onHide={handleClose}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				className="epic-quest"
			>
			<Modal.Header closeButton>
			</Modal.Header>
			<Modal.Body>
			  <h2>Hub Quest Registration Form</h2>
			  Ready for the Quest? Excellent! First, tell us a little more about yourself.
    		<Form 
    			name="contact" 
    			method="post" 
    			data-netlify="true" 
    			data-netlify-honeypot="bot-field" 
    			noValidate 
    			validated={validated} 
    			onSubmit={handleSubmit}
    			style={{marginTop: "30px"}}
    			>
				  <Form.Control type="hidden" name="form-name" value="contact" />
				  <Form.Group controlId="formBasicText">
				    <Form.Label>Your Name:<span>*</span></Form.Label>
				    <Form.Control type="text" name="name" required/>
				    <Form.Control.Feedback type="invalid">
	            Required Field
	          </Form.Control.Feedback>
				  </Form.Group>
				  <Form.Group controlId="formBasicEmail">
				    <Form.Label>Email Address:<span>*</span></Form.Label>
				    <Form.Control type="email" name="email" required/>
				    <Form.Control.Feedback type="invalid">
	            Valid Email Required
	          </Form.Control.Feedback>
				  </Form.Group>
				  <Form.Group controlId="exampleForm.ControlSelect1">
				    <Form.Label>Which of the three available roles and corresponding competencies will you focus on?<span>*</span></Form.Label>
				    <Form.Control as="select" name="role" required>
				      <option value="" disabled selected>Select One Option</option>
 				      <option value="Country-Medical-Director">Country Medical Director</option>
				      <option value="Medical-Sciences">Medical Sciences</option>
				      <option value="Medical-Manager">Medical Manager</option>
				      <option value="Other">Other (please state below)</option>
				    </Form.Control>
				    <Form.Control.Feedback type="invalid">
	            Required Field
	          </Form.Control.Feedback>
				  </Form.Group>
				  <Form.Group controlId="exampleForm.ControlTextarea1">
				    <Form.Label>What will mastery in at least one competency/skill help you achieve in life and your career within this role?<span>*</span></Form.Label>
				    <Form.Control as="textarea" name="message" rows={3} required/>
					  <Form.Control.Feedback type="invalid">
	            Required Field
	          </Form.Control.Feedback>
					  <Form.Text className="text-muted">
			      	<span>*</span>Required
				    </Form.Text>
				  </Form.Group>
				  
				  <Button variant="primary" type="submit">
				    Submit
				  </Button>
				</Form>

			</Modal.Body>
		</Modal>
	</>
  );
}
