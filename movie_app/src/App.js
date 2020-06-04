import React from 'react';
import PropTypes from "prop-types";

function MyImg({ name, picture, rating }) {
  return <div>
    <h1>I like {name}</h1>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
}

MyImg.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
  rating: PropTypes.number
};
const imgMap = [
  {
    id: 1,
    name: "freeImage1",
    image: "https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60",
    rating: 5
  },
  {
    id: 2,
    name: "freeImage2",
    image: "https://cdn.mos.cms.futurecdn.net/LHcG66TebAwFGeaXRMRh7n.jpg",
    rating: 4.9
  },
]

// function rederImage(item) {
//   return <MyImg name={item.name} picture={item.image} />
// }

function App() {
  return (
    <div className="App">
      {imgMap.map(imgItem => (
        <MyImg key={imgItem.id} name={imgItem.name} picture={imgItem.image} rating={imgItem.rating} />
      ))}
    </div>
  );
}

export default App;
