import axios from 'axios';
import { React, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then((res) => setPhotos(res.data))
      .finally(() => setTimeout(() => {
        setLoading(false)
      }, 1000));
  }, []);

  return loading ? (
    <div className="App">
      <div className="wrapper">
        <div className="item">
          <div className="title loadtitle"></div>
          <div className="loadimg"></div>
        </div>
        <div className="item">
          <div className="title loadtitle"></div>
          <div className="loadimg"></div>
        </div>
        <div className="item">
          <div className="title loadtitle"></div>
          <div className="loadimg"></div>
        </div>
        <div className="item">
          <div className="title loadtitle"></div>
          <div className="loadimg"></div>
        </div>
        <div className="item">
          <div className="title loadtitle"></div>
          <div className="loadimg"></div>
        </div>
        <div className="item">
          <div className="title loadtitle"></div>
          <div className="loadimg"></div>
        </div>
        <div className="item">
          <div className="title loadtitle"></div>
          <div className="loadimg"></div>
        </div>
        <div className="item">
          <div className="title loadtitle"></div>
          <div className="loadimg"></div>
        </div>
        <div className="item">
          <div className="title loadtitle"></div>
          <div className="loadimg"></div>
        </div>
        <div className="item">
          <div className="title loadtitle"></div>
          <div className="loadimg"></div>
        </div>
      </div>
    </div>
  ) : (
    <div className="App">
      <div className="wrapper">
    {photos.map(el => 
        <div className="item">
          <div className="title">{el.title}</div>
          <img className='img' src={el.thumbnailUrl} alt="logo"/>
        </div>
    )}
      </div>
    </div>
  );
}

export default App;
