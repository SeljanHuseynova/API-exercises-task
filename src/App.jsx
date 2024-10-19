import axios from "axios";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchInputs from "./components/SearchInputs";
import backgroundImage from './assets/images/pexels-kqpho-1583582.jpg';

function App() {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
   
    if (!inputText) return; 
    
    setLoading(true);  
    axios
      .get(`https://api.datamuse.com/words?rel_trg=${inputText}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); 
      });

    setInputText("");  
  };

  return (
    <div
      className="container-fluid p-5 d-flex align-items-center justify-content-center flex-column"
      style={{
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "none",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <SearchBar handleSearch={handleSearch} inputText={inputText} setInputText={setInputText} />
      <SearchInputs data={data} loading={loading} />
    </div>
  );
}

export default App;
