import React, {FC} from 'react';
import './App.css';
import WorldMap from './components/WorldMap';
import { evaluate } from './api/api';

const App: FC = () => {
  evaluate(0, 0).then(e => console.log(e));
  return (
    <div className="App">
      <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
        <WorldMap onSelectCoords={(lat, lon) => console.log(lat, lon)} />
        <h1 className="text-3xl font-bold text-blue-500">
          Location Analytics
        </h1>
      </div>
    </div>
  );
}

export default App;
