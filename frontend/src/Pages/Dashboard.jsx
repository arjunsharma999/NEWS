 fix/1
import {Button, Card , CardBody , Container, Form ,Input , Label} from 'reactstrap';
import { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';


 master
 
 
 
const Dashboard = () => {

    const editor = useRef(null);
    const [content, setContent] = useState('');

   
fix/1


   return(
   <div className='wrapper'>

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
    
 master
 
   <Card className='shadow-sm'>
   
   <CardBody>

    <h3> Add a post </h3>
    <Form>

     <div className='my-3 m-5'>

         <Label For="title">Post Tittle</Label>
        <Input type="text" placeholder='Title' name="" id="title" />

     </div>

     <div className='my-3 m-5'>

         <Label For="Post">Type Post</Label>
        {/* <Input type="textarea" placeholder='Type Post' name="" id="Post" style={{height:'300px'}} /> */}
        <JoditEditor
        ref={editor}
        value={content}
        onChange={newContent=>setContent(newContent)}
        
        />
 </div>
        
        {/* file field */}

          <div className='mt-3 m-5'>
            <Label for='image'> Select the image</Label>
            <Input id='image' type='file' multiple
           />
           </div>
      



    
     <div className='my-3 m-5'>
        <Label for="Category">Post Category</Label>
        <Input type='select'
        id=''
        placeholder='Add category'
      >
        
        
        <option>
            Sports
        </option>
        <option>
            Culture
        </option>
        <option>
            Festival
        </option>
        <option>
            Holy ganges
        </option>
        <option>
            It sector
        </option>


        </Input>
        
         </div>

         <Container className='text-center'>
            <Button color='primary'> Create post</Button>
            
         </Container>


    </Form>

   </CardBody>

   </Card>


   </div>
   )   
}
 
export default Dashboard