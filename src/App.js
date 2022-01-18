import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import ToDoPage from "./pages/ToDo";

function App() {
  return (
    <div>
      <MainNavigation />
      <main>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<AllMeetupsPage />} />
            <Route path="/new-meetup" element={<NewMeetupPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/todo" element={<ToDoPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
