function Card({ photo, setPhotoModal }) {
  return (
    <div className="">
        <img 
            src={photo.urls.small} 
            alt={photo.alt_description} 
            className="w-full h-full max-h-96 rounded-md cursor-pointer object-cover"
            onClick={() => setPhotoModal(photo)}
        />
    </div>
  )
}

export default Card