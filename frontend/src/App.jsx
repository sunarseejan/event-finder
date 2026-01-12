import { useEffect, useState } from "react";

function App() {
  const [events, setEvents] = useState([]);
  const [interests, setInterests] = useState([]);

  // Fetch events from backend
  useEffect(() => {
    fetch("http://127.0.0.1:8000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  // Interest options
  const allInterests = ["Tech", "Music", "Fitness", "Art"];

  // Handle checkbox change
  const handleInterestChange = (e) => {
    const value = e.target.value;
    if (interests.includes(value)) {
      setInterests(interests.filter((i) => i !== value));
    } else {
      setInterests([...interests, value]);
    }
  };

  // Filter events by selected interests
  const filteredEvents =
    interests.length === 0
      ? events
      : events.filter((e) => interests.includes(e.category));

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Agentic Event Finder
      </h1>

      {/* Interest Selector */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Select your interests:</h2>
        <div className="flex gap-4">
          {allInterests.map((interest) => (
            <label key={interest} className="flex items-center gap-1">
              <input
                type="checkbox"
                value={interest}
                onChange={handleInterestChange}
                className="accent-blue-500"
              />
              {interest}
            </label>
          ))}
        </div>
      </div>

      {/* Event Feed */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="p-4 border rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="font-bold text-lg">{event.name}</h3>
            <p className="text-sm text-gray-600">{event.category}</p>
            <p className="text-sm">{event.location}</p>
            <p className="text-sm">
              {event.date} at {event.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
