import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Stylesheets/Homepage.css";
import CategoryPage from './CategoryPage.jsx'
import { API_KEY } from "../data.js";

function Homepage({ category }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPageToken, setNextPageToken] = useState('');
  const navigate=useNavigate();
  
  const fetchData = async (pageToken = '') => {
    let videolist_url;
    if (!category) {
      videolist_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=10&pageToken=${pageToken}&key=${API_KEY}`;
    } else {
      videolist_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${category}&type=video&maxResults=10&pageToken=${pageToken}&regionCode=IN&key=${API_KEY}`;
    }

    try {
      const response = await fetch(videolist_url);
      const result = await response.json();
      setData(prev => [...prev, ...result.items]);
      setNextPageToken(result.nextPageToken || '');
      setLoading(false);
    } catch (error) {
      console.error("Fetch error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setData([]);
    setLoading(true);
    fetchData();
  }, [category]);

  const loadMore = () => {
    if (!loading && nextPageToken) {
      fetchData(nextPageToken);
    }
  };

  const handleClick=(videoId)=>{
    navigate(`/playvideo/${videoId}`);
  }

  const formatViews = (num) => {
    return Intl.NumberFormat('en', { notation: 'compact' }).format(num);
  };

  if (loading) {
    return <><p>Loading...</p></>;
  }

  return (
    <div className='cards-section'>
      <CategoryPage />
      {data.map((item, index) => (
        <div className='card' key={index} onClick={()=>handleClick(item.id.videoId || item.id)}>
          <img
            src={item.snippet.thumbnails?.medium?.url}
            alt='thumbnail'
            className='thumbnail-img'
            loading='lazy'
          />
          <div className='card-data'>
            <img
              src={item.snippet.thumbnails?.default?.url || item.snippet.thumbnails?.medium?.url}
              alt='channel-logo'
              className='channel-logo'
            />
            <div className='channel-data'>
              <h4 className='card-data2'>{item.snippet.title}</h4>
              <h6 className='channel-name'>{item.snippet.channelTitle}</h6>

              <span className="views-data">
                <p>{item.statistics?.viewCount? 
                `${formatViews(item.statistics.viewCount)} views • `: ''}
                  {new Date(item.snippet.publishedAt).toLocaleDateString()}
                </p>
                </span>


            </div>
          </div>
        </div>
      ))}

      <br />
      {nextPageToken && (
        <button className='loadmore-btn' onClick={loadMore}>
          Load more...
        </button>
      )}
      <br />
    </div>
  );
}

export default Homepage;
