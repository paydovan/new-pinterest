function Card({ photo, setPhotoModal, index }) {
  return (
    <div className="">
        <img 
            src={photo.urls.small} 
            alt={photo.alt_description} 
            className="w-full h-full max-h-96 rounded-md cursor-pointer object-cover"
            onClick={() => setPhotoModal({photo, index})}
        />
    </div>
  )
}

export default Card