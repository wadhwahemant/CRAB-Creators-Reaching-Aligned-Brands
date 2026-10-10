import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { DataProvider } from './contexts/DataContext';

// Public Pages
import Home from './pages/Public/Home';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';

// Creator Pages
import CreatorDashboard from './pages/Creator/Dashboard';
import CreatorDiscover from './pages/Creator/Discover';
import CampaignDetail from './pages/Creator/CampaignDetail';
import CreatorApplications from './pages/Creator/Applications';
import CreatorProfile from './pages/Creator/Profile';

import BusinessDashboard from './pages/Business/Dashboard';
import DiscoverCreators from './pages/Business/Discover';
import CreatorProfileView from './pages/Business/CreatorProfile';
import CreateCampaign from './pages/Business/CreateCampaign';
import CampaignReview from './pages/Business/CampaignReview';

function App() {
  return (
    <DataProvider>
      <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/creator/dashboard" element={<CreatorDashboard />} />
          <Route path="/creator/discover" element={<CreatorDiscover />} />
          <Route path="/creator/campaigns/:campaignId" element={<CampaignDetail />} />
          <Route path="/creator/applications" element={<CreatorApplications />} />
          <Route path="/creator/profile" element={<CreatorProfile />} />
          
          <Route path="/business/dashboard" element={<BusinessDashboard />} />
          <Route path="/business/discover" element={<DiscoverCreators />} />
          <Route path="/business/creators/:creatorId" element={<CreatorProfileView />} />
          <Route path="/business/campaigns/new" element={<CreateCampaign />} />
          <Route path="/business/campaigns/:campaignId/review" element={<CampaignReview />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
