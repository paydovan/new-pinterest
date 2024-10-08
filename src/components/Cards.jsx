import Card from "./Card"

function Cards({ photos, setPhotoModal }) {
  return (
    <section className="w-full max-w-7xl h-full grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {photos.map((photo, index) => (
            <Card 
              key={photo.id} 
              photo={photo} 
              setPhotoModal={setPhotoModal}
              index={index}
            />
        ))}
    </section>
  )
}

export default Cards