import React, { useState } from 'react'
import 'boxicons'
import axios from 'axios';
import { baseUrl } from '../../Constants';
import { showAlert } from '../../Pages/DialogBox';

function Footer() {
  const [emailData, setEmailData] = useState('');
  const [messageData, setMessageData] = useState('');

  const sendFeedback = async () => {
    try {
      const response = axios.post(`${baseUrl}/news/feedback`, { email: emailData, message: messageData }, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log((await response).data);
      showAlert('success', 'Success', 'The feedback was sent successfully');
    } catch (error) {
      console.log('Error creating news article:', error);
      // Handle the error if the API call fails.
      if (error.response.status === 401) {
        showAlert('error', 'Error!!', 'Not Authorized to this action');
      }
      else if (error.message.status === 404) {
        showAlert('error', 'Error!!', 'The news article not found');
      }
      else if(error.message.status === 400){
        showAlert('error', 'Error!!', 'Fill the mandatory fields');
    }
      else {
        showAlert('error', 'Error!!', 'Error occured while doing this action')
      }
    }

  }

  return (

    <>

      <footer>
        <div className="main-content">
          <div className="left box">
            <h2 className='ft'>About us</h2>
            <div className="content">
              <p> रीजनल रिपोर्टर हिमालयी सरोकारों से साक्षात्कार के उद्देश्य के साथ फरवरी 2007 में संस्थापक संपादक स्व.बी.शंकर एवं उनके उत्साही साथियों की ओर से मीडिया संस्थान के रूप में स्थापित की गई एक मासिक पत्रिका थी। </p>
              {/* <div className="social">
              <a href=""><i class="fa-brands fa-facebook"></i></a>
              <a href="#"><span className="fab fa-twitter"></span></a>
              <a href=""><span className="fab fa-instagram"></span></a>
              <a href=""><span className="fab fa-youtube"></span></a>
            </div> */}
            </div>
          </div>

          <div className="center box">
            <h2 className='ft'>Address</h2>
            <div className="content">
              <div className="place">
                <span className="fas fa-map-marker-alt"></span>
                <span className="text">रीजनल रिपोर्टर
                  76 अप्पर बाजार शंकर निवास श्रीनगर गढ़वाल</span>
              </div>
              <div className="phone">
                <span className="fas fa-phone-alt"></span>
                <span className="text">मोबाइल 9412079290,7455089290</span>
              </div>
              <div className="email">
                <span className="fas fa-envelope"></span>
                <span className="text">abc@example.com</span>
              </div>
            </div>
          </div>

          <div className="right box">
            <h2 className='ft'>Contact us</h2>
            <div className="content">
              <form action="#">
                <div className="email">
                  <div className="text">Email *</div>
                  <input type="email" required value={emailData} onChange={(e) => setEmailData(e.target.value)} />
                </div>
                <div className="msg">
                  <div className="text">Message *</div>
                  <textarea rows="2" cols="25" required value={messageData} onChange={(e) => setMessageData(e.target.value)}></textarea>
                </div>
                <div className="btn">
                  <button type="submit" onClick={sendFeedback}>Send </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bottom">
          <center>
            <span className="far fa-copyright"></span><span> @RR News All rights reserved.</span>
          </center>
        </div>
      </footer>


    </>
  )
}

export default Footer