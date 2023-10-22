import { TiTick } from "react-icons/ti";

const Contact = () => {

    (function() {
        'use strict';
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })();

    return (
        <div>
        <h1>Get in touch with me!</h1>

    <form class="needs-validation" novalidate>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationCustomName">Name</label>
            <input type="text" class="form-control" id="validationCustomName" placeholder="Name" required/>
            <div class="valid-feedback">
                <TiTick />
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationCustomEmail">Email</label>
            <div class="input-group">
              
              <input type="text" class="form-control" id="validationCustomEmail" placeholder="Email" aria-describedby="inputGroupPrepend" required/>
              <div class="invalid-feedback">
                Please provide an email.
              </div>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationCustomMessage">Message</label>
            <input type="text" class="form-control" id="validationCustomMessage" placeholder="Type your message here..." required/>
            <div class="invalid-feedback">
              Please provide a message.
            </div>
          </div>
        </div>

        <button class="btn btn-primary" type="submit">Send message</button>
      </form>


    <p>Alternatively:</p>
    
    <p>To send me an email directly, <a href="mailto:kuljeetpanesar14@gmail.com" target="_blank" rel="noreferrer noopener">click here.</a></p>
    
    <p>You can also get in touch with me via my <a href="https://www.linkedin.com/in/kuljeetpanesar" target="_blank" rel="noreferrer noopener">LinkedIn.</a></p>    
    </div>
    )
}

export default Contact;