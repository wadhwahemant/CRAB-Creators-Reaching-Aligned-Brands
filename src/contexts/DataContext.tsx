import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Campaign, Application, CreatorProfile } from '../types';
import { mockCampaigns, mockCreators } from '../lib/mockData';

interface DataContextType {
  campaigns: Campaign[];
  applications: Application[];
  creators: CreatorProfile[];
  applyToCampaign: (campaignId: string) => void;
  saveCampaign: (campaignId: string) => void;
  getApplication: (campaignId: string) => Application | undefined;
  getApplicationsForCampaign: (campaignId: string) => Application[];
  updateApplicationStatus: (appId: string, status: Application['status']) => void;
  addCampaign: (campaign: Omit<Campaign, 'id'>) => string;
  creatorNiche: string;
  setCreatorNiche: (niche: string) => void;
  creatorOnboardingDismissed: boolean;
  setCreatorOnboardingDismissed: (val: boolean) => void;
  businessOnboardingDismissed: boolean;
  setBusinessOnboardingDismissed: (val: boolean) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [campaigns, setCampaigns] = useState<Campaign[]>(mockCampaigns);
  const [creators] = useState<CreatorProfile[]>(mockCreators);
  const [applications, setApplications] = useState<Application[]>([
    { id: 'app-1', campaignId: 'c1', creatorId: 'cr1', creator: mockCreators[0], status: 'Under Review', appliedAt: '2026-10-08T10:00:00Z' },
    { id: 'app-2', campaignId: 'c1', creatorId: 'cr2', creator: mockCreators[1], status: 'Applied', appliedAt: '2026-10-09T08:30:00Z' },
  ]);
  const [creatorNiche, setCreatorNiche] = useState<string>('Technology');
  const [creatorOnboardingDismissed, setCreatorOnboardingDismissed] = useState(false);
  const [businessOnboardingDismissed, setBusinessOnboardingDismissed] = useState(false);

  const applyToCampaign = (campaignId: string) => {
    setApplications(prev => {
      const exists = prev.find(a => a.campaignId === campaignId);
      if (exists) {
        return prev.map(a => a.campaignId === campaignId ? { ...a, status: 'Applied', appliedAt: new Date().toISOString() } : a);
      }
      return [...prev, { id: `app-${Date.now()}`, campaignId, status: 'Applied', appliedAt: new Date().toISOString() }];
    });
  };

  const saveCampaign = (campaignId: string) => {
    setApplications(prev => {
      const exists = prev.find(a => a.campaignId === campaignId);
      if (exists) return prev;
      return [...prev, { id: `app-${Date.now()}`, campaignId, status: 'Saved' }];
    });
  };

  const getApplication = (campaignId: string) => {
    return applications.find(a => a.campaignId === campaignId && !a.creatorId); // without creatorId for logged in creator view mock
  };

  const getApplicationsForCampaign = (campaignId: string) => {
    return applications.filter(a => a.campaignId === campaignId);
  };

  const updateApplicationStatus = (appId: string, status: Application['status']) => {
    setApplications(prev => prev.map(a => a.id === appId ? { ...a, status } : a));
  };

  const addCampaign = (campaign: Omit<Campaign, 'id'>) => {
    const id = `c${Date.now()}`;
    const newCampaign = { ...campaign, id };
    setCampaigns(prev => [...prev, newCampaign]);
    return id;
  };

  return (
    <DataContext.Provider value={{ 
      campaigns, applications, creators, 
      applyToCampaign, saveCampaign, getApplication, 
      getApplicationsForCampaign, updateApplicationStatus, addCampaign,
      creatorNiche, setCreatorNiche,
      creatorOnboardingDismissed, setCreatorOnboardingDismissed,
      businessOnboardingDismissed, setBusinessOnboardingDismissed
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
