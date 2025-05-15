import React, { useState } from 'react';
import ImagePreview from './ImagePreview';
import '../styles/ImageUploader.css';

function ImageUploader() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);

    const newImages = files.map((file) => ({
      id: URL.createObjectURL(file),
      file,
      url: URL.createObjectURL(file),
    }));

    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleDelete = (id) => {
    setImages((prevImages) => prevImages.filter((img) => img.id !== id));
  };

  return (
    <div className="uploader-container">
      <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
      <div className="image-grid">
        {images.map((img) => (
          <ImagePreview key={img.id} image={img} onDelete={handleDelete} />
        ))}
      </div>
      <div>Hola buenas tardes</div>
    </div>
  );
}

export default ImageUploader;