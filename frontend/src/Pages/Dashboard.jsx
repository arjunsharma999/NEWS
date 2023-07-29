import {Button, Card , CardBody , Container, Form ,Input , Label} from 'reactstrap';
import { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import { Link } from 'react-router-dom';
import Modify from './Modify';
 
 
 
const Dashboard = () => {

    const editor = useRef(null);
    const [content, setContent] = useState('');

   


   return(
   <div className='wrapper'>
 
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
            <Link to="/Home">
            <Button color='primary me-2'> Create post</Button>
            </Link>
            <Link to="/Modify-post">
            <Button color='danger'> Modify</Button>
            </Link>
    
         </Container>


    </Form>

   </CardBody>

   </Card>


   </div>
   )   
}
 
export default Dashboard