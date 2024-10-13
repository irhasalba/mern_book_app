import logo from './logo.svg';
import './App.css';
import { NavbarComponent } from './components/navbar';
import { BookPage } from './pages/BookPage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { AuthorPage } from './pages/AuthorPage';


function App() {
  return (
    <BrowserRouter>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<BookPage/>}/>
        <Route path='/author' element={<AuthorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
