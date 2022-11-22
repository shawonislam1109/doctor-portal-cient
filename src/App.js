import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Router/Route';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto' >
      <RouterProvider
        router={route}

      ></RouterProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
