import './App.css';
import { useState, useEffect } from 'react';
import * as petService from './services/petService';
import PetList from './components/PetList/PetList';
import PetDetail from './components/PetDetail/PetDetail';

const App = () => {
  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect (() => {
    const fetchPets = async () => {
      const fetchedPets = await petService.index();
      if (fetchedPets.error) {
        throw new Error(fetchedPets.error)
      }
      setPets(fetchedPets);
    };
    fetchPets();
  }, []);

  const handleSelect = (pet) => {
    setSelected(pet);
  };

  return (
    <>
      <PetList pets={pets} handleSelect={handleSelect}/>
      <PetDetail selected={selected} />
    </>
  )
};

export default App;
