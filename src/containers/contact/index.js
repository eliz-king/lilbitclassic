import React from 'react';
import './index.scss';

const ContactMe = () => {
  render(
    return(
      <div className=''>
        <head>
          <title>Contact Me:</title>
        </head>
        <body>
          <div class="container">
            <form action="action_page.php">

              <label for="name">Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

              <label for="email">Email</label>
              <input type="text" id="email" name="email" placeholder="Email.."></input>


              <label for="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
              <input type="submit" value="Submit"></input>

             </form>
            </div> 
         </body>
       </div>
    )
  )
}

export default ContactMe;