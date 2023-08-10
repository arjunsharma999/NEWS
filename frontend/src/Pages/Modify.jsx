import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import { baseUrl } from '../Constants';
import Sort from '../components/Sort'
import CategoryFilter from '../components/Filter';
import { showConfirmationAlert } from './ConfirmationDialogBox';
import { showAlert } from './DialogBox';


function Modify() {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('date');
  const additionlaCategories = [];

  const handleDelete = async (slug) => {
    const result = showConfirmationAlert('warning', 'Confirmation Required', 'Are you sure to Delete this news Article');
    if ((await result).isConfirmed) {
      try {
        const response = await axios.delete(`${baseUrl}/news/delete/${slug}`, {
          withCredentials: true
        });
        showAlert('success', 'Deleted', 'The news article deleted successfully');
      } catch (error) {
        if (error.response.status === 401) {
          showAlert('error', 'Error', 'Not Authorized to this action');
        }
        else {
          showAlert('error', 'Error', 'Failed to delete the article');
        }
      }
    }
  };

  const handleSort = (selectedOption) => {
    setSortOption(selectedOption);

    if (selectedOption) {
      if (selectedOption.value === 'sort by date') {
        // Sort by date
        console.log("date");
        setSortOption('date')
        setCurrentPage(1);

      } else if (selectedOption.value === 'sort by views') {
        // Sort by views
        console.log('views');
        setSortOption('views');
        setCurrentPage(1);
      }
    } else {
      // Reset to original list
      console.log('reset');
    }
  };

  const handleFilter = (selectedOption) => {
    setSelectedCategory(selectedOption.value);
    console.log(selectedCategory);
  };

  useEffect(() => {
    // Make the API call to fetch news data
    axios.get(`${baseUrl}/news/getNews?category=${selectedCategory}&sortBy=${sortOption}&pageSize=5&page=${currentPage}`)
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
  }, [currentPage, selectedCategory, sortOption]);

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
      <div class=' free col-md-7  '>
        <Sort onChange={handleSort} />
      </div>

      <div class=' free col-md-7  '>
        <CategoryFilter onChange={handleFilter} additionlaCategories={additionlaCategories} />
      </div>

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
                <a href="#" class="btn btn-danger " onClick={() => handleDelete(newsItem.slug)}>Delete</a>
              </div>
            </div>
          </div>
        ))}
      </div>



      {/* <div class="card pt-5 m-5" >

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

      </div> */}
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