import './App.css';
import ReviewList from 'pages/reviews/ReviewList';
import Profile from 'pages/accounts/Profile';
import Login from 'pages/accounts/Login';
import Components from 'pages/examples/Components';
import { Route, Routes, Navigate } from 'react-router-dom';
import TopNav from 'components/TopNav';

function App() {
  return (
    <div className="app">
      <TopNav />
      <Routes>
        <Route path="/" element={<Navigate to="/reviews>/" />} />
        <Route path="/accounts/login/" element={<Login />} />
        <Route path="/accounts/profile/" element={<Profile />} />
        <Route path="/reviews/" element={<ReviewList />} />
        <Route path="/examples/components/" element={<Components />} />
      </Routes>
    </div>
  );
}

export default App;
