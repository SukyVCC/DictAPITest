import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';


const SingleWord = () => {
    const {keyword} = useParams();
    const [word, setWord] = useState(null);

    useEffect(() => {
    const fetchWord = async () => {
      try {
        const response = await fetch(`${URL}${keyword}`);
        const data = await response.json();
        setWord(data);
        console.log("your data: ", data);
      } catch (error) {
        console.error('Failed to fetch Word details:', error);
      }
    };

    fetchWord();
  }, [keyword]);

  if (!word) {
    return <div>Loading...</div>;
  }

  if (word.title) {
    return (
    <div>
    <h1>Word Not Found</h1>
    <p>Fuck off, bye.</p>
    </div>
    );
  }
    
  return (
    <div>
    <h1>{word[0].word}</h1>
    <p>Definition: {word[0].meanings[0].definitions[0].definition}</p>
    </div>
  );
};

export default SingleWord;