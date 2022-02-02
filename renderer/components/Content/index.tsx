import { useState } from "react";
import { AlbumsView } from "../AlbumsView";
import { ArtistsView } from "../ArtistsView";
import { TrackList } from "../TrackList";

enum MuseView {
  MuseTracksView,
  MuseArtistsView,
  MUseAlbumsView,
}

export const Content = () => {
  const [view, setView] = useState<MuseView>(MuseView.MuseTracksView);
  const isTracksView = view === MuseView.MuseTracksView;
  const isArtistsView = view === MuseView.MuseArtistsView;
  const isAlbumsView = view === MuseView.MUseAlbumsView;

  return (
    <div className="flex-grow p-4 overflow-y-scroll scrollbar-hide">
      <h1 className="text-4xl">My Muse</h1>
      <div className="flex space-x-3 mt-2">
        <h3
          className={`text-2xl ${isTracksView && "border-b-2"} border-blue-500 cursor-pointer`}
          onClick={() => setView(MuseView.MuseTracksView)}
        >
          Songs
        </h3>
        <h3
          className={`text-2xl ${isArtistsView && "border-b-2"} border-blue-500 cursor-pointer`}
          onClick={() => setView(MuseView.MuseArtistsView)}
        >
          Artists
        </h3>
        <h3
          className={`text-2xl ${isAlbumsView && "border-b-2"} border-blue-500 cursor-pointer`}
          onClick={() => setView(MuseView.MUseAlbumsView)}
        >
          Albums
        </h3>
      </div>
      <hr />

      {isTracksView && <TrackList />}
      {isArtistsView && <ArtistsView />}
      {isAlbumsView && <AlbumsView />}
    </div>
  );
};
