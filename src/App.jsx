import EventList from "./Components/EventList"
import NavBar from "./Components/NavBar";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from "@apollo/client";

const events = [
  {
    id: 1,
    title: "Evolution Concert",
    description: "Live music concert in A-block auditorium",
    start: "2021-03-01T09:00:00",
    end: "2021-03-01T10:00:00",
    allDay: false,
    entryFee: 100,
    poster:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/trippy-modern-creative-rock-concert-poster-design-template-a449ecc056eed70aa9e48b6f3f2e636f_screen.jpg?ts=1637006690",
  },
  {
    id: 2,
    title: "Festo",
    description: "Festo",
    start: "2021-03-01T10:00:00",
    end: "2021-03-01T11:00:00",
    allDay: false,
    entryFee: 100,
    poster:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054",
  },
  {
    id: 3,
    title: "Festo",
    description: "Festo",
    start: "2021-03-01T10:00:00",
    end: "2021-03-01T11:00:00",
    allDay: false,
    entryFee: 100,
    poster:
      "https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?w=2000",
  },
];

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="bg-gray-50 h-screen">
        <NavBar />
        <div className="mt-16 pt-4 px-4">
          <h1 className="text-3xl font-semibold my-3">Upcoming events</h1>
          <EventList events={events} />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App
