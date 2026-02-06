import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Stylesheets/CategoryPage.css";
import { API_KEY } from '../data';

function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${API_KEY}`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      const filtered = result.items.filter(item => item.snippet.assignable);
      setCategories(filtered);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCategoryClick = (categoryTitle) => {
    navigate(`/searchpage/${categoryTitle}`);
  };

  return (
    <div className='category-container'>
      <div className='category-list'>
        {categories.map((cat) => (
          <button key={cat.id} className='category-btn' 
          onClick={() => handleCategoryClick(cat.snippet.title)}>
           {cat.snippet.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
