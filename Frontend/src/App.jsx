import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/jokes');
        setJokes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJokes();
  }, []);

  return (
    <>
      <h1>Hariom OP</h1>
      <p>Jokes {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={index}> {/* Use index as key if joke.id is not available */}
          <p>{joke.title}</p>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;

