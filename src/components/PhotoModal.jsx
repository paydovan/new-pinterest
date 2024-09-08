import { ChevronLeft } from "lucide-react"

function PhotoModal({ photo, setPhotoModal }) {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-zinc-900/85 flex flex-col items-center justify-center gap-2" onClick={() => setPhotoModal(null)}>
        <div className="w-full flex justify-end pr-2">
        <div className="bg-zinc-300 rounded cursor-pointer" onClick={() => setPhotoModal(null)}>
          <ChevronLeft size={36} />
        </div>
        </div>
        <img src={photo.urls.regular} alt={photo.alt_description} className="w-9/12 sm:w-1/2 md:w-1/3 lg:w-1/5" />
        <div className="bg-zinc-300 p-2 rounded-sm">
            <p className="text-xl">Conteudo: {photo.alt_description}</p>
        </div>
    </div>
  )
}

export default PhotoModal