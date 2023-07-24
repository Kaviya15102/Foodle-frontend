import React, { useState } from 'react';
import './RestaurantReviews.css';
import Restaurantheader from "../../UserSide/NavBar/Restaurantheader";
const RestaurantReview = () => {
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setResponse(event.target.value);
  };

  const handleSubmit = () => {
    // Add your submit logic here
    console.log('Response submitted:', response);
    // Reset the response state after submission (if required)
    setResponse('');
  };

  return (
    <div><Restaurantheader />
    <div className="restaurant-review">
      
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Comment</th>
            <th>Response</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Harish</td>
            <td>Good Restaurant</td>
            <td>Thankyou!!</td>
          </tr>
          <tr>
            <td>Naveen</td>
            <td>Awesome dishes</td>
            <td>Tysm..!</td>
          </tr> <tr>
            <td>Harish</td>
            <td>Good Restaurant</td>
            <td>Thankyou!!</td>
          </tr>
        </tbody>
      </table>
      <div className="response-input">
        <input
          type="text"
          className='response'
          value={response}
          onChange={handleInputChange}
          placeholder="Enter your response..."
        />
      </div>
      <button type="submit" className='sbtn' onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  );
};

export default RestaurantReview;