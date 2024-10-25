// pages/index.js
import './whatsapp.css'

export default function Whatsapp() {
    return (
      <div>
       <div id="callme">
    <a href="tel:9823235570"><div id="callmeMain"></div></a>
 </div>
 <ul id="social_side_links">
  <li><a target="_blank" href="https://api.whatsapp.com/send?phone=919823235560">
  <img src="https://res.cloudinary.com/dm5f3hpbd/image/upload/v1729837737/whatsapp_gmdu9h.png" alt="wp" className="img-responsive whatsapp-button-style"/>
  </a> 
  </li>
</ul>
      </div>
    );
  }
  