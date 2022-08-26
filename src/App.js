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
      <Row fetchUrl = {requests.fetchCharacters} id = "AVENGERS" tag = "Avengers"/>
      <Row fetchUrl = {requests.fetchCharacters} id = "SECRET WARS" tag = "Secret Wars"/>
      <Row fetchUrl = {requests.fetchCreators} id = "CREATORS" tag = "Creators"/>
    </div>
  );
}

export default App;
