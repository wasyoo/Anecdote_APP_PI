import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import NewAnecdote from './Components/NewAnecdote';
import About from './Components/About';
import Header from './Components/Header';
import { AnecdoteProvider } from './Context/Anecdote.context';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AnecdoteProvider>
          <div className="container-fluid">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/add_anecdote" exact component={NewAnecdote} />
              <Route path="/about" exact component={About} />
              <Route path="*">
                <h3>404 Not Found</h3>
              </Route>
            </Switch>
          </div>
        </AnecdoteProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
