import Homepage from './pages/homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/signup';

function App() {
  return (
   <>
   <Router><Routes>
   <Route path="/" element={<Homepage />} />
   <Route path="/Authentication" element={<Signup />} />
      </Routes>
      </Router>
   </>
  );
}

export default App;
