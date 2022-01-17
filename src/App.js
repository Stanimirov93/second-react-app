import { Route, Routes } from 'react-router-dom';
import Todo from './components/Todo';
import MainNavigation from './components/layout/MainNavigation';


import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
    <div>
      <MainNavigation />
      <h1>My Todo</h1>
        <main>
          <Routes>
            <Route path='/' exact element={<AllMeetupsPage />}/>         
            <Route path='/new-meetup' element={<NewMeetupPage />}/>          
            <Route path='/favorites' element={<FavoritesPage />}/>          
          </Routes>
        
          <Todo text='Container 1' />
          <Todo text='Container 2'/>
          <Todo text='Container 3'/>
        </main>
    </div>
  );
}

export default App;
