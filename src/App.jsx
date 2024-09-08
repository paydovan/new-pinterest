import { useEffect, useState, useCallback } from "react";
import Cards from "./components/Cards";
import { SearchPhoto } from "./components/SearchPhoto";
import axios from "axios";
import PhotoModal from "./components/PhotoModal";

function App() {
  const [photos, setPhotos] = useState([]);
  const [photoModal, setPhotoModal] = useState(null);
  const [userSearch, setUserSearch] = useState("");

  const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

  const fetchApiRandom = useCallback(async () => {
    try {
      const response = await axios.get("https://api.unsplash.com/photos/random", {
        params: {
          client_id: apiKey,
          count: 12,
        }
      });
      setPhotos(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [apiKey]);

  const fetchSearchApi = useCallback(async () => {
    try {
      if (userSearch.length > 0) {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
          params: {
            client_id: apiKey,
            query: userSearch,
          }
        });
        setPhotos(response.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  }, [apiKey, userSearch]);

  useEffect(() => {
    fetchApiRandom();
  }, [fetchApiRandom]);

  useEffect(() => {
    if (userSearch.length > 0) {
      fetchSearchApi();
    }
  }, [userSearch, fetchSearchApi]);

  return (
    <main className="flex flex-col items-center justify-center">
      <header className="flex flex-col gap-4 items-center w-full max-w-7xl p-4">
        <h1 className="text-4xl font-bold">Pinterest 2.0</h1>
        <SearchPhoto setUserSearch={setUserSearch} />
      </header>
      <Cards photos={photos} setPhotoModal={setPhotoModal} />
      {photoModal && (
        <PhotoModal photo={photoModal} setPhotoModal={setPhotoModal} />
      )}
    </main>
  );
}

export default App;
