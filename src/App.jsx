import './App.css';
import { useState, useEffect } from 'react';
import * as petService from './services/petService';
import PetList from './components/PetList/PetList.jsx';

const App = () => {
  const [pets, setPets] = useState([]);

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

  return (
    <>
      <PetList pets={pets}/>
    </>
  )
};

export default App;
