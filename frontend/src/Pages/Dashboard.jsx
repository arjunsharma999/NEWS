import {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';


 
 
 
const Dashboard = () => {
   
   const[record,setRecord] = useState([])
 
   const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(resposne=> resposne.json())
       .then(res=>setRecord(res))
   };
   const hasValidJwtToken = () => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      return true; 
    }
    return false; // Return false if the token is not present
  };
  //localStorage.setItem('jwtToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJ1c2VybmFtZSI6InJlZ2lvbmFsIn0sImlhdCI6MTY5MDQ4NzAzMiwiZXhwIjoxNjkwNDg3OTMyfQ.mxhDu3sK4EUEBtwl1l97CMknEwVWhaggPvccIbKcg-c');

  const navigate = useNavigate();
   useEffect(() => {
    const isAuthenticated = hasValidJwtToken();

    if (!isAuthenticated) {

        navigate('/admin/Log-in'); 

    }
      getData();
   },)
    
 
    return (
        <>
        

        
    <div class=" col main pt-5 mt-3">
         
       
        {/* <p class="lead d-none d-sm-block">Add Employee Details and Records</p> */}
 
        <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
            </button>
            <strong>Data and Records</strong> Learn more about employee
        </div>
        <div class="row mb-3">
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card bg-success text-white h-100">
                    <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div class="rotate">
                            <i class="fa fa-user fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Users</h6>
                        <h1 class="display-4">134</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-danger h-100">
                    <div class="card-body bg-danger">
                        <div class="rotate">
                            <i class="fa fa-list fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Posts</h6>
                        <h1 class="display-4">87</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-info h-100">
                    <div class="card-body bg-info">
                        <div class="rotate">
                          <i class="fab fa-twitter fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Tweets</h6>
                        <h1 class="display-4">125</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-warning h-100">
                    <div class="card-body">
                        <div class="rotate">
                            <i class="fa fa-share fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Shares</h6>
                        <h1 class="display-4">36</h1>
                    </div>
                </div>
            </div>
       </div>
     <hr/>
        
 
    </div>

  <div className=" flex align-items-sm-center mb-4 mx-auto col-10 col-md-8 col-lg-3 pt-5">


  <textarea name="textarea" rows="2" placeholder='Topic' cols="40"></textarea>
    
    <textarea name="textarea" rows="20" cols="120" placeholder='Write A Blog'></textarea>
    

  </div>
              


    </>
    )
}
 
export default Dashboard