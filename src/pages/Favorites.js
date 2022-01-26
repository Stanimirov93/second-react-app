import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let contet;

  if (favoritesCtx.totalFavorites === 0) {
    contet = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    contet = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h2>Favorites Page</h2>
      {contet}
    </section>
  );
}

export default FavoritesPage;
