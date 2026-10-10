import type { Campaign } from '../types';

export const mockCampaigns: Campaign[] = [
  {
    id: 'c1',
    title: 'Wireless Earbuds Launch - Tech Review',
    brand: { id: 'b1', name: 'NOVA Audio', industry: 'Consumer Tech', logo: '' },
    description: 'We are looking for tech creators to review our new ANC wireless earbuds. Honest feedback and high-quality b-roll required.',
    niche: 'Technology',
    platform: 'YouTube',
    compensation: '$1,500 - $2,500',
    deadline: '2026-11-01',
    matchScore: 96,
    matchReason: 'Strong alignment with your past audio equipment reviews and your audience demographics perfectly match our target market.',
    deliverables: ['1x YouTube Dedicated Video (8-10 min)', '3x High-res photos for brand use'],
    audienceRequirements: '100k+ subscribers, tech enthusiast demographic'
  },
  {
    id: 'c2',
    title: 'Smart Home Hub Integration',
    brand: { id: 'b2', name: 'LUMA Tech', industry: 'Smart Home', logo: '' },
    description: 'Demonstrate how the LUMA Hub integrates into a daily smart home routine.',
    niche: 'Technology',
    platform: 'TikTok',
    compensation: '$800',
    deadline: '2026-10-25',
    matchScore: 88,
    matchReason: 'Your recent smart home setup videos performed extremely well within our target audience.',
    deliverables: ['1x TikTok Video (45-60s)'],
    audienceRequirements: '50k+ followers'
  },
  {
    id: 'c3',
    title: 'Performance Running Shoe Campaign',
    brand: { id: 'b3', name: 'ORBIT Athletics', industry: 'Fitness', logo: '' },
    description: 'Looking for runners to test and showcase our new marathon-grade running shoes.',
    niche: 'Fitness',
    platform: 'Instagram',
    compensation: '$1,200',
    deadline: '2026-11-15',
    matchScore: 45,
    matchReason: 'Niche mismatch (Fitness vs Technology).',
    deliverables: ['2x Instagram Reels', '1x Story Set (3 frames)'],
    audienceRequirements: 'Active lifestyle, 20k+ followers'
  },
  {
    id: 'c4',
    title: 'Developer Keyboard Review',
    brand: { id: 'b4', name: 'MONO Studio', industry: 'Peripherals', logo: '' },
    description: 'Showcase the acoustic profile and typing feel of our custom mechanical keyboard designed for programmers.',
    niche: 'Technology',
    platform: 'YouTube',
    compensation: '$2,000',
    deadline: '2026-10-30',
    matchScore: 92,
    matchReason: 'Your audience has a high concentration of software engineers who index highly on mechanical keyboard interest.',
    deliverables: ['1x YouTube Video integration (2-3 min)'],
    audienceRequirements: 'Tech/Programming focused, 75k+ subscribers'
  }
];

export const mockCreators: import('../types').CreatorProfile[] = [
  {
    id: 'cr1',
    name: 'Alex River',
    niche: 'Technology',
    bio: 'Tech reviewer and mechanical keyboard enthusiast. Creating content to help developers find the best gear.',
    location: 'San Francisco, CA',
    avatar: '',
    platforms: [
      { name: 'YouTube', handle: '@alexriver', followers: '124K', engagement: '4.8%' }
    ],
    matchScore: 92,
    matchReason: 'Audience heavily indexes on software engineers and early tech adopters.'
  },
  {
    id: 'cr2',
    name: 'Jamie Fox',
    niche: 'Fitness',
    bio: 'Marathon runner and fitness coach sharing daily routines and gear reviews.',
    location: 'Austin, TX',
    avatar: '',
    platforms: [
      { name: 'Instagram', handle: '@jamieruns', followers: '85K', engagement: '6.2%' },
      { name: 'TikTok', handle: '@jamie_fit', followers: '210K', engagement: '8.1%' }
    ],
    matchScore: 95,
    matchReason: 'Perfect alignment with active lifestyle campaigns.'
  },
  {
    id: 'cr3',
    name: 'Sam Chen',
    niche: 'Gaming',
    bio: 'Competitive gamer and hardware tester. Building the ultimate streaming setups.',
    location: 'Seattle, WA',
    avatar: '',
    platforms: [
      { name: 'Twitch', handle: '@samchen_tv', followers: '45K', engagement: '3.1%' },
      { name: 'YouTube', handle: '@samgaming', followers: '320K', engagement: '5.5%' }
    ]
  }
];
