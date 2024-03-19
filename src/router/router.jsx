import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
        <Route exact path="/" component={Home} />
        <Route path="*" element={<p>404 not found</p>} />
    </Routes>
  );
}

export default App;
