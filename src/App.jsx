import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import SectionTabBar from './components/SectionTabBar';
import FeaturedFilmsSection from './components/FeaturedFilmsSection';
import ActivityFeed from './components/ActivityFeed';
import ProfileSidebar from './components/ProfileSidebar';
import RecentReviewsSection from './components/RecentReviewsSection';
import Footer from './components/Footer';
import SignInModal from './components/SignInModal';
import SignUpModal from './components/SignUpModal';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div className="app">
      <Navbar onSignIn={() => setShowSignIn(true)} onSignUp={() => setShowSignUp(true)} />
      <HeroBanner />
      <SectionTabBar />
      <FeaturedFilmsSection id="filmes-hoje" />
      <div className="content-grid">
        <ActivityFeed id="listas" onUserSelect={setSelectedUser} />
        <ProfileSidebar id="membros" user={selectedUser} />
      </div>
      <RecentReviewsSection id="criticas" />
      <Footer />
      {showSignIn && <SignInModal onClose={() => setShowSignIn(false)} />}
      {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}
    </div>
  );
}
