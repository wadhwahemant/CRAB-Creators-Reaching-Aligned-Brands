export interface Brand {
  id: string;
  name: string;
  industry: string;
  logo: string;
}

export interface Campaign {
  id: string;
  title: string;
  brand: Brand;
  description: string;
  niche: string;
  platform: string;
  compensation: string;
  deadline: string;
  matchScore?: number;
  matchReason?: string;
  deliverables: string[];
  audienceRequirements: string;
}

export interface CreatorProfile {
  id: string;
  name: string;
  niche: string;
  bio: string;
  location: string;
  platforms: {
    name: string;
    handle: string;
    followers: string;
    engagement: string;
  }[];
  matchScore?: number;
  matchReason?: string;
  avatar: string;
}

export interface Application {
  id: string;
  campaignId: string;
  creatorId?: string; // Add this for business side
  creator?: CreatorProfile; // Add this for business side
  status: 'Saved' | 'Applied' | 'Under Review' | 'Shortlisted' | 'Accepted' | 'Rejected';
  appliedAt?: string;
}
