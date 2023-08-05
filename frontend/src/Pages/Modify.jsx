import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'


function Modify() {
    const [newsData, setNewsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const { category } = useParams();

    const Alert = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    
   
    }


    useEffect(() => {
        // Make the API call to fetch news data
        axios.get(`http://localhost:8085/news/getNews?pageSize=5&page=${currentPage}`)
            .then(response => {
                setNewsData(response.data.paginatedNewsArticles); // Update the state with the fetched news data
                console.log(response.data.paginatedNewsArticles);
                setTotalPages(response.data.totalPages);
                console.log(totalPages);
                console.log(response.data);
                console.log(response.data.page);
            })
            .catch(error => {
                console.log('Error fetching news:', error);
            });
    }, [currentPage, category]);

    // Swal.fire({
    //     title: 'Are you sure?',
    //     text: "You won't be able to revert this!",
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes, delete it!'
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       Swal.fire(
    //         'Deleted!',
    //         'Your file has been deleted.',
    //         'success'
    //       )
    //     }
    //   })

    return (
        <>

            <div class="card pt-5 m-5" >
                {newsData.map(newsItem => (
                        <div class="row no-gutters">
                            <div class="col-sm-3">
                                <img class="card-img" src={newsItem.imageUrl} alt="Suresh Dasari Card" />
                            </div>
                            <div class="col-sm-7">
                                <div class="card-body">
                                    <h5 class="card-title">{newsItem.title}</h5>
                                    <p class="card-text">{newsItem.content}</p>
                                    <Link to={`/news-article/${newsItem.slug}`} >
                                    <a href="#" class="btn btn-primary me-2">View</a>
                                    </Link>
                                    <Link to={`/admin/edit/${newsItem.slug}`} >
                                    <a href="#" class="btn btn-warning me-2">EDIT</a>
                                    </Link>
                                    <a href="#" class="btn btn-danger ">Delete</a>
                                </div>
                            </div>
                        </div>
                ))}
            </div>



            <div class="card pt-5 m-5" >

                        <div class="row no-gutters">
                            <div class="col-sm-3">
                            
                            </div>
                            <div class="col-sm-7">
                                <div class="card-body">
                                    <h5 class="card-title"></h5>
                                    <p class="card-text"></p>
                            
                                    <a href="#" class="btn btn-primary me-2">View</a>
                                    
                                    
                                    <a href="#" class="btn btn-warning me-2">EDIT</a>
                                
                                    <a href="#" onClick={Alert} class="btn btn-danger ">Delete</a>
                                </div>
                            </div>
                        </div>
                
            </div>
            <div className="container my-5 d-flex gap-4 justify-content-center">
          <button onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
            disabled={currentPage === 1}
            className='btn '
          >
            Previous
          </button>
          <button onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
            disabled={currentPage === totalPages}
            className='btn '
          >
            Next
          </button>

        </div>
        </>
    )
}

export default Modify