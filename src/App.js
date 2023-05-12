import './style/index.css';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import { useState } from 'react'

function App() {
  const [value, setValue] = useState(false);
  const modelOpen = () => {
    setValue(!value);
  }
  return (
    <main>
     <StarRating />
     <Dialog value={value} />
     <button className={value ? 'close' : 'open'} onClick={modelOpen} >
      {value ? 'Close' : 'Open'}
     </button>
    </main>
  );
}

export default App;
