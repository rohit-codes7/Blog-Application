import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [existingThumbnail, setExistingThumbnail] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:9000/api/v1/get/singleBlog/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setFormData({
          title: res.data.title,
          description: res.data.description,
        });

        setExistingThumbnail(res.data.thumbnail);
      } catch (err) {
        console.error("Error fetching blog", err);
      }
    };
    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);

    if (thumbnail) {
      data.append("thumbnail", thumbnail);
    }

    try {
      await axios.put(`http://localhost:9000/api/v1/update/blog/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      alert("Blog updated successfully");
      navigate(`/blog/${id}`);
    } catch (error) {
      console.error("Error updating blog:", error.message);
      alert("Failed to update blog");
    }
  };

  return (
    <div className="container my-5">
      <h2>Edit Blog</h2>
      <form onSubmit={handleUpdate} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            rows="5"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Current Thumbnail</label><br />
          {existingThumbnail ? (
            <img
              src={`http://localhost:9000/${existingThumbnail}`}
              alt="Current Thumbnail"
              style={{ maxWidth: '200px', marginBottom: '10px' }}
            />
          ) : (
            <p>No thumbnail available</p>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Upload New Thumbnail (optional)</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={handleThumbnailChange}
          />
        </div>

        <button type="submit" className="btn btn-success">Update</button>
      </form>
    </div>
  );
};

export default EditBlog;
