import logo from './logo.svg';
import './App.css';
import { NavbarComponent } from './components/navbar';
import { BookPage } from './pages/BookPage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { AuthorPage } from './pages/AuthorPage';
import { CategoryPage } from './pages/CategoryPage';


function App() {
  return (
    <BrowserRouter>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<BookPage/>}/>
        <Route path='/author' element={<AuthorPage/>}/>
        <Route path='/category' element={<CategoryPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
