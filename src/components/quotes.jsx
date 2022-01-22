import React, { useState, useEffect } from 'react';
import QuotesData from './quotes.json'



export default function quotes() {
  const [quote, setQuote] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
       const randomIndex = Math.floor(Math.random() * QuotesData.length - 1);
      setQuote(QuotesData[randomIndex].quote);
    }, 10000);
  }, []);

  return (
    <footer>
      <h3>{quote}</h3>
    </footer>
  )
}
