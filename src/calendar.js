import React, { useState } from 'react';

function Calendar(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleEventAdd = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div>
      <h1>Calendar</h1>
      <div>Selected date: {selectedDate.toDateString()}</div>
      <button onClick={() => handleDateChange(new Date())}>Today</button>
      <button onClick={() => handleDateChange(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}>Prev Month</button>
      <button onClick={() => handleDateChange(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}>Next Month</button>
      <EventForm onEventAdd={handleEventAdd} />
      <EventList events={events} />
    </div>
  );
}

function EventForm(props) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onEventAdd({ title, date });
    setTitle('');
    setDate(new Date());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Date:
        <input type="date" value={date.toISOString().substr(0, 10)} onChange={(e) => setDate(new Date(e.target.value))} />
      </label>
      <button type="submit">Add Event</button>
    </form>
  );
}

function EventList(props) {
  return (
    <ul>
      {props.events.map((event, index) => (
        <li key={index}>{event.title} ({event.date.toDateString()})</li>
      ))}
    </ul>
  );
}

export default Calendar;
