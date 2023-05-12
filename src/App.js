import './style/index.css';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import { useState } from 'react'

function App() {
  const [value, setValue] = useState(true);
  const modelOpen = () => {
    setValue(!value);
  }
  return (
    <main>
     <StarRating />
     <Dialog value={value} />
     <button className='open' onClick={modelOpen} >open</button>
    </main>
  );
}

export default App;
