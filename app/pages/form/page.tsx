"use client"
import { useState } from 'react';
import axios from 'axios';

const page: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/api/add_data', { name, email });
        console.log('Data added successfully');
    } catch (error) {
        console.error('Error adding data:', error);
    }
};

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default page;
