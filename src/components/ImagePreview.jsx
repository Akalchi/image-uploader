import '../styles/ImagePreview.css';

function ImagePreview({ image, onDelete }) {
  return (
    <div className="image-preview">
      <img src={image.url} alt="preview" />
      <button className="delete-button" onClick={() => onDelete(image.id)}>X</button>
    </div>
  );
}

export default ImagePreview;
