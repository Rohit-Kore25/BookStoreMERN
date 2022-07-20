
import './App.css';
import Header from './components/Header';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/AddBook';
import Books from './components/Book/Books';
import About from './components/About';
import BookDetails from './components/Book/BookDetails';


function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>

      <main>
        <Routes>
          <Route exact path='/' element = {<Home/>} />
          <Route exact path='/add' element = {<AddBook/>} />
          <Route exact path='books/book/:id' element = {<BookDetails/>} />
          <Route exact path='/books' element = {<Books/>} />
          <Route exact path='/about' element = {<About/>} />
          
        </Routes>
      </main>

    </div>
  );
}

export default App;
