import { ChevronLeft, ChevronRight, X } from "lucide-react"

function PhotoModal({ photo, setPhotoModal, photos, currentIndex }) {

  function handleNextPhoto() {
    const nextIndex = (currentIndex + 1) % photos.length; // Navegar em loop
    setPhotoModal({ photo: photos[nextIndex], index: nextIndex });
  }

  function handlePreviousPhoto() {
    const previousIndex = (currentIndex - 1 + photos.length) % photos.length;
    setPhotoModal({ photo: photos[previousIndex], index: previousIndex });
  }

  const handleCloseModal = (e) => {
    // Verificar se o clique foi na área de fundo (overlay)
    if (e.target === e.currentTarget) {
      setPhotoModal(null);
    }
  };

  return (
    <div
      className="w-full h-full fixed top-0 left-0 bg-zinc-900/85 flex flex-col items-center justify-center gap-2"
      onClick={handleCloseModal} // Só fecha se o clique for no overlay
    >
      <div className="w-full flex justify-end pr-2">
        <div
          className="bg-zinc-300 rounded cursor-pointer"
          onClick={() => setPhotoModal(null)}
        >
          <X size={36} />
        </div>
      </div>

      <img
        src={photo.urls.regular}
        alt={photo.alt_description}
        className="w-9/12 sm:w-1/2 md:w-1/3 lg:w-1/5"
      />

      <div className="flex justify-between items-center w-9/12 sm:w-1/2 md:w-1/3 lg:w-1/5">
        <button onClick={handlePreviousPhoto}>
          <ChevronLeft size={36} className="text-white" />
        </button>

        <button onClick={handleNextPhoto}>
          <ChevronRight size={36} className="text-white" />
        </button>
      </div>

      <div className="bg-zinc-300 p-2 rounded-sm">
        <p className="text-xl">Conteúdo: {photo.alt_description}</p>
      </div>
    </div>
  );
}

export default PhotoModal