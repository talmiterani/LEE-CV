import React from 'react'
import "./contact.css"; 

export default function Contact() {
    return (
        <div>
            <div className="row justify-content-center ">
                <h1 className="contact">Contact</h1>
            </div>
        <form action="mailto:lee.gouetta@gmail.com" method="POST" enctype="text/plain" name='EmailForm'>
       
            <div className="form-row justify-content-center">
                <div className="form-row ml-2">
                    <div className="form-group col-md-5" style={{marginRight:'70px'}}>
                        <label className="labelName" htmlFor="name">Name</label>
                        <input name="Name: " type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group col-md-5" >
                        <label className="labelEmail" htmlFor="email">Email</label>
                        <input name="email: " type="email" className="form-control" id="email"/>
                    </div>
                </div>
            </div>
            <div className="form-row justify-content-center">
                <div className="form-row">
                    <div className="form-group col-md-12 ">
                        <label className="labelMessage" htmlFor="name">Message</label>
                        <textarea name='Message: ' id="message" type="text" className="form-control" />
                    </div>
                </div>
            </div>
            <div className="form-row justify-content-center">
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <button type="submit" className="btn btn-primary contactSubmitBtn">Submit</button>
                    </div>
                </div>
            </div>

           
        </form>


{/* 
        <form action="mailto:chriscoyier@gmail.com">
    
    
        <input name="subject" id="subject" type="text" class="input" value="Exampleaaa"/>
    <div class="field"><label class="label" for="body">Email Body</label>
        <textarea class="textarea" name="body" id="body">Example Email Body</textarea></div>
    <div><input type="submit" value="Create Email" class="button is-primary"/></div>
</form> */}
        </div>
    )
}
