import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../Stylesheets/Video.css";
import { API_KEY } from '../data';

function Video() {
  const { videoid } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchdata = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoid}&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result.items[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [videoid]);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Video not found.</p>;

  return (
    <div className='video-section'>
      {/* Main Video */}
      <iframe
        src={`https://www.youtube.com/embed/${videoid}`}
        title={data.snippet.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className='thevideo'
      ></iframe>

      {/* Video Title */}
      <h2 className='videotitle'>{data.snippet.title}</h2>

      {/* Views & Publish Date */}
      <div className="publish-info">
        <p>{parseInt(data.statistics.viewCount).toLocaleString()} views</p>
        <p>{new Date(data.snippet.publishedAt).toLocaleDateString()}</p>
      </div>

      {/* Channel Info */}
      <div className='channeldata'>
        <img
          src={data.snippet.thumbnails?.default?.url || data.snippet.thumbnails?.medium?.url}
          alt='channel-logo'
          className='channel-logo'
        />

        <div className='channelinfo'>
          <h3>{data.snippet.channelTitle}</h3>
        </div>

        <button className='subscribe-btn'>Subscribe</button>

        {/* Like, Dislike, Share */}
        
        <div className='videodata'>
          <div className='like-dislike'>
            <img
              src='https://img.icons8.com/?size=100&id=24816&format=png&color=000000'
              alt='like'
              className='likebtn'
              style={{ width: "30px" }}
            />
            <p style={{marginTop:"5px"}}>{data.statistics.likeCount}&nbsp;|&nbsp;</p>
            <img
              src='https://img.icons8.com/?size=100&id=15957&format=png&color=000000'
              alt='dislike'
              className='dislike-btn'
              style={{ width: "30px" }}
            />
          </div>

          <img
            src='https://img.icons8.com/?size=30&id=Bj1vcU6y7wT0&format=png&color=000000'
            alt='share'
            className='share'
          />
        </div>
      </div>

      {/* Description */}
      <div className='description' style={{ width: "95%" }}>
        <details>
          <summary>Description...</summary>
          <p>{data.snippet.description}</p>
        </details>
      </div>

      {/* Comments Count */}
      <h2>
        Comments &nbsp;<span>{data.statistics.commentCount}</span>
      </h2>
    </div>
  );
}

export default Video;
