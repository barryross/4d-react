import React from 'react'
const Contact =  () => {
  return (
    <section id="contact">
         <h1>Contact</h1>
         <form>
           <div class="flex">
             <label for="name">Name</label>
             <input type="text" id="name" name="name"/>
           </div>
            <div class="flex">
             <label for="email">Email</label>
             <input type="text" id="email" name="email"/>
           </div>    
           <div class="flex">
             <label for="message">Message</label>
            <textarea id="message" name="message"></textarea>
           </div>      
         </form>
       </section>
  )
}

export default Contact
