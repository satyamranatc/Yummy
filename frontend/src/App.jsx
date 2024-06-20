import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/data', { data });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div>
      <h1>Hello World!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter some data"
        />
        <button type="submit">Send Data</button>
      </form>
    </div>
  );
}

export default App;
