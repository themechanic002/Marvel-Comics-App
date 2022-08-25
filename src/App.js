import requests from './api/requests';
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>
      <Row fetchUrl = {requests.fetchComics} id = "COMICS"/>
      <Row fetchUrl = {requests.fetchCharacters} id = "CHARACTERS"/>
    </div>
  );
}

export default App;
