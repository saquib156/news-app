import './App.css';
import Header from './components/Header';
import NewsList from './components/NewsList';
import FilterNews from './components/FilterNews';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router basename="/news-app">
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact componet={NewsList} />
          <Route path="/read/:category" component={FilterNews} />
        </Switch>
        <NewsList />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
