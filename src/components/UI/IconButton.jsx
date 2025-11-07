const IconButton = ({ src, alt, onClick, id, className = '' }) => (
  <button
    id={id}
    className={`icon p-2 rounded-full hover:bg-gray-100 transition ${className}`}
    onClick={onClick}
    aria-label={alt}
  >
    <img src={src} alt={alt} className="w-6 h-6" />
  </button>
);

export default IconButton;