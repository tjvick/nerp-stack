import './App.css';
import {useEffect, useState} from "react";
import axios from "axios"


function App() {
  const [pageContent, setPageContent] = useState({})
  const [messages, setMessages] = useState([]);

  const fetchPageContent = async () => {
    try {
      const res = await axios.get("http://localhost:4000")
      setPageContent(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:4000/messages")
      setMessages(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchPageContent()
  }, [])

  return (
    <div>
      <main>
        {
          pageContent && <>
            <h1>{pageContent.title}</h1>
            <p>{pageContent.message}</p>
          </>
        }
        <button onClick={fetchMessages}>
          Get Messages
        </button>
        <ul>
          {
            messages.map(({id, message}) => (
              <li key={id}>{message}</li>
            ))
          }
        </ul>
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
