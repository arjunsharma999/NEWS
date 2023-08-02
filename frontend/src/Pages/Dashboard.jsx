
import { Button, Card, CardBody, Container, Form, Input, Label } from 'reactstrap';
import { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const { slug } = useParams();
    const editor = useRef(null);
    const [record, setRecord] = useState([])
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('ख़बरों की ख़बर');
    const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image
    const imageInputRef = useRef(null); // Ref to access the file input element
    const [dataForModify, setdataForModify] = useState(null);
    const [action, setAction] = useState('Create');

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resposne => resposne.json())
            .then(res => setRecord(res))
    };

    const validateUser = async () => {
        try {
            const response = await axios.get("http://localhost:8085/admin/validate-user", {
                withCredentials: true, // This includes cookies in the request
            });
            console.log(response.data);
            if (response.status === 200) {
                console.log('Cookie exists!');
                // The cookie exists, so the user is authenticated. Proceed to show the Dashboard or any other protected content.
                return true;
            } else {
                console.log('Cookie does not exist!');
                // The cookie does not exist, so the user is not authenticated. Redirect the user to the login page or handle it as needed.
                return false;
            }
        } catch (error) {
            console.log('Error checking cookie:', error);
            return false;
        }

    }
    const navigate = useNavigate();

    useEffect(() => {
        validateUser().then(isAuthenticated => {
            if (!isAuthenticated) {
                navigate('/admin/Log-in');
            }
        }).catch(error => {
            console.log('Error checking authentication:', error);
            navigate('/admin/Log-in');
        });
        getData();
        if (slug) {
            fetchDataForModification(slug);
        }
        console.log(action);

    }, [slug]);
    console.log(slug);
    

    const fetchDataForModification = async (slug) => {
        setAction("Modify")
        try {
            const response = await axios.get(`http://localhost:8085/news/get/${slug}`);
            console.log(response.data)
            setdataForModify(response.data);
            setTitle(response.data.title);
            setContent(response.data.content);
            setCategory(response.data.category);
        }
        catch (error) {
            console.log("Error fetching data: ", error);
        }
    }

    // Function to handle image selection
    const handleImageSelect = (event) => {
        setSelectedImage(event.target.files[0]); // Assuming you are selecting only one image
    };

    const handleCategorySelect = (event) => {
        setCategory(event.target.value); // Update the category state when the user makes a selection
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('category', category);
        formData.append('image', selectedImage); // Append the selected image to the form data

        console.log(title);
        console.log(category);
        console.log(content);

        if (action === "Create") {
            try {
                const response = await axios.post('http://localhost:8085/news/create', formData, {
                    withCredentials: true, // This includes cookies in the request
                });
                console.log('News article created:', response.data);
                // Handle the response from the API as needed
            } catch (error) {
                console.log('Error creating news article:', error);
                // Handle the error if the API call fails.
            }
        }
        else if(action === "Modify"){
            try {
                const response = await axios.post(`http://localhost:8085/news/modify/${dataForModify._id}`, formData, {
                    withCredentials: true, // This includes cookies in the request
                });
                console.log('News article created:', response.data);
                // Handle the response from the API as needed
            } catch (error) {
                console.log('Error creating news article:', error);
                // Handle the error if the API call fails.
            }
        }
    };

    // const setEditorFont = () => {
    //     if (editor.current) {
    //         // Access the underlying DOM element of the editor
    //         const editorElement = editor.current.container;

    //         // Set the custom font
    //         editorElement.style.fontFamily = "'Kruti Dev 010', sans-serif";
    //     }
    // };

    return (
        <div className='wrapper'>

            <Card className='shadow-sm'>

                <CardBody>

                    <h3> Add a post </h3>
                    <Form>

                        <div className='my-3 m-5'>

                            <Label For="title">Post Tittle</Label>
                            <Input type="text" placeholder='Title' name="" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

                        </div>

                        <div className='my-3 m-5'>

                            <Label For="Post">Type Post</Label>
                            {/* <Input type="textarea" placeholder='Type Post' name="" id="Post" style={{height:'300px'}} /> */}
                            <JoditEditor
                                ref={editor}
                                value={content}
                                onChange={newContent => setContent(newContent)}
                            />

                        </div>

                        {/* file field */}

                        <div className='mt-3 m-5'>
                            <Label for='image'> Select the image</Label>
                            <Input
                                id='image'
                                type='file'
                                accept='image/*'
                                onChange={handleImageSelect}
                                ref={imageInputRef} // Assign the ref to the file input element
                                multiple={false} // Set to false to allow only one image
                            />
                        </div>





                        <div className='my-3 m-5'>
                            <Label for="Category">Post Category</Label>
                            <Input type='select'
                                id='category'
                                placeholder='Add category'
                                value={category}
                                onChange={handleCategorySelect}
                            >
                                <option>
                                    ख़बरों की ख़बर
                                </option>
                                <option>
                                    मंथन
                                </option>
                                <option>
                                    खबरे
                                </option>
                                <option>
                                    साहित्य
                                </option>
                                <option>
                                    संपदकी
                                </option>
                                <option>
                                    पहाड़ रैबार
                                </option>
                                <option>
                                    विज्ञान और तकनीक
                                </option>
                                <option>
                                    स्वस्थ्य
                                </option>
                                <option>
                                    शहरनामा
                                </option>
                            </Input>
                        </div>
                        <Container className='text-center'>
                            <Link to="/Home">
                                <Button color='primary me-2' onClick={handleSubmit}>
                                    {action === "Create" ? 'Create Post' : 'Save Modification'}
                                </Button>
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