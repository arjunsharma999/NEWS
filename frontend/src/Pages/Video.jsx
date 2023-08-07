import React, { useState } from 'react'
import Footer from '../components/AdminPage/Footer'
import Navbar from '../components/AdminPage/Navbar'
import axios from 'axios';
const { baseUrl, ytUrl } = require('../Constants');
function Video() {

  const [ytData, setYtData] = useState([]);

  const getYtData = async () => {
    const response = await axios.get(`${baseUrl}${ytUrl}`);
    setYtData(response.data);
    console.log(response.data);
  }
  useState(() => {
    getYtData();
  })

  return (
    <>

      <Navbar />

      <div className="container content-height">
  <div className="list-group">
    {ytData.map((ytItem) => (
      <div key={ytItem.id} className="list-group-item my-3">
        <iframe
          src={`https://www.youtube.com/embed/${ytItem.videoId}`}
          width="100%"
          height="600px"
          title={ytItem.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        {/* Add other content related to ytItem here */}
        <h5 className="card-title my-2 card-title-fixed-length">{ytItem.title}</h5>
        <p className="card-text">{ytItem.description}</p>
        {/* Add any other content you want to display */}
      </div>
    ))}
  </div>
</div>


      {/* <div className="container justify-content-center d-flex content-height">
        {ytData.map((ytItem) => (
          <div key={ytItem.id} className="d-flex gap-5">
            <div className="d-flex align-items-center justify-content-center">
              <iframe
                src={`https://www.youtube.com/embed/${ytItem.videoId}`}
                width="100%"
                height="300px"
                title={ytItem.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div> */}
            {/* Add other content related to ytItem here */}
          {/* </div>
        ))}
      </div> */}

      {/* <div className="d-flex align-items-center justify-content-center ">
        <iframe src="https://www.youtube.com/embed/QH2-TGUlwu4" width="300px" height="50%" title="Nyan Cat [original]" frameborder="0" allowfullscreen></iframe>
      </div>

      <div className="d-flex align-items-center justify-content-center ">
        <iframe src="https://www.youtube.com/embed/QH2-TGUlwu4" width="300px" height="50%" title="Nyan Cat [original]" frameborder="0" allowfullscreen></iframe>
      </div>


    </div >
</div > */}

    <Footer />

    </>
  )


}

export default Video