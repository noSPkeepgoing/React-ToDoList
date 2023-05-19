import React, { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '123', text: 'hi there', status: 'active' },
    { id: '456', text: 'how r u', status: 'active' },
  ]);
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
}
