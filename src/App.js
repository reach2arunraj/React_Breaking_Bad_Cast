import React, { useState, useEffect } from 'react';
import Hearder from "./components/Display/Header"
import CharacterGrid from "./components/Display/characters/CharacterGrid"

import './App.css';


const  App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItem = async () => {
      const result = await fetch("https://www.breakingbadapi.com/api/characters").then((data) => data.json())
      setItems(result)
      setIsLoading(false)
    }
    fetchItem()
  }, [])

  return (
    <div className="container">
      <Hearder />
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
