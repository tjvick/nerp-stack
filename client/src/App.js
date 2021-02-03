import './App.css';
import {useEffect, useState} from "react";
import axios from "axios"

function App() {
  const [content, setContent] = useState({})

  useEffect(() => {
    axios.get("http://localhost:4000")
      .then(res => res.data)
      .then(data => {
        setContent(data);
      })
      .catch(err => {console.error(err)})
  }, [])

  return (
    <div>
      <main>
        {
          content && <>
            <h1>{content.title}</h1>
            <p>{content.message}</p>
          </>
        }
      </main>
      <footer>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </footer>
    </div>
  );
}

export default App;
