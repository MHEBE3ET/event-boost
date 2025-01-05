"use client";



import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './core';
import CampaignForm from './CampaignForm';
import { fetchAudienceSegments } from '../services/mockData';
//import { toast } from '@/components/ui/use-toast';

interface AudienceSegmentProps {
  title: string;
  contacts: string;
  bgColor: string;
  tags: string[];
  buttonColor: string;
}

interface CampaignItemProps {
  status: string;
  name: string;
  stats: string;
}

interface ProgressBarProps {
  label: string;
  value: number;
}

const TargetingContent = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [audienceSegments, setAudienceSegments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch both campaigns and audience data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch campaigns
        const campaignsResponse = await fetch('http://localhost:3001/api/campaigns');
        if (campaignsResponse.ok) {
          const campaignsData = await campaignsResponse.json();
          setCampaigns(campaignsData);
        }

        // Fetch audience segments (mock)
        const segmentsData = await fetchAudienceSegments();
        setAudienceSegments(segmentsData as any[]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCreateCampaign = async (campaignData: any) => {
    try {
      const response = await fetch('http://localhost:3001/api/campaigns', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(campaignData)
      });

      if (response.ok) {
        const data = await response.json();
        setIsFormOpen(false);
        setCampaigns(prev => [data, ...prev]);
      }
    } catch (error) {
      console.error('Error creating campaign:', error);
    }
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Smart Audience Segments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {audienceSegments.map((segment) => (
              <AudienceSegment
                key={segment.id}
                title={segment.title}
                contacts={segment.contacts.toLocaleString()}
                bgColor={segment.bgColor}
                tags={segment.tags}
                buttonColor={segment.buttonColor}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Rest of your component remains the same */}
      <Card>
        <CardHeader>
          <CardTitle>Campaign Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold mb-3">Active Campaigns</h3>
              <div className="space-y-3">
                {campaigns.length > 0 ? (
                  campaigns.map((campaign) => (
                    <CampaignItem
                      key={campaign.id}
                      status={campaign.status === 'active' ? 'green' :
                        campaign.status === 'paused' ? 'yellow' : 'purple'}
                      name={campaign.name}
                      stats={`${campaign.clicks || 0} clicks • ${campaign.conversionRate || 0}% conversion`}
                    />
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">No campaigns yet</p>
                )}
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-bold mb-3">Campaign Performance</h3>
              <div className="space-y-3">
                <ProgressBar label="Email Open Rate" value={42} />
                <ProgressBar label="Click-through Rate" value={28} />
                <ProgressBar label="Registration Rate" value={12} />
              </div>
            </div>

            <button
              className="w-full py-2 bg-blue-600 text-white rounded-lg"
              onClick={() => setIsFormOpen(true)}
            >
              Create New Campaign
            </button>
          </div>
        </CardContent>
      </Card>

      <CampaignForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleCreateCampaign}
      />
    </div>
  );
};

const AudienceSegment: React.FC<AudienceSegmentProps> = ({ title, contacts, bgColor, tags, buttonColor }) => (
  <div className={`p-4 border rounded-lg ${bgColor}`}>
    <div className="flex items-center justify-between mb-3">
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{contacts} contacts</p>
      </div>
      <button className={`px-4 py-2 ${buttonColor} text-white rounded-lg text-sm`}>
        Target
      </button>
    </div>
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag, index) => (
        <span key={index} className={`px-2 py-1 ${bgColor} text-${buttonColor.split('bg-')[1]} rounded text-xs`}>
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const CampaignItem: React.FC<CampaignItemProps> = ({ status, name, stats }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className={`w-2 h-2 bg-${status}-500 rounded-full`}></div>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">{stats}</p>
      </div>
    </div>
    <button className="text-blue-600 text-sm">Edit</button>
  </div>
);

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value }) => (
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-600 h-2 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);

const ViewToggle: React.FC = () => (
  <div className="flex gap-2">
    <button className="px-3 py-1 text-sm border rounded-lg hover:bg-gray-50">Week</button>
    <button className="px-3 py-1 text-sm border rounded-lg bg-blue-50 text-blue-600">Month</button>
    <button className="px-3 py-1 text-sm border rounded-lg hover:bg-gray-50">Quarter</button>
  </div>
);



const ScheduleContent: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Event Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Tech Innovation Summit 2024</h3>
            <ViewToggle />
          </div>

          <div className="border rounded-lg p-4">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-24 flex-shrink-0">
                  <div className="text-sm font-bold">NOW</div>
                  <div className="text-xs text-gray-500">Planning Phase</div>
                </div>
                <div className="flex-grow p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-medium">Early Bird Registration</h4>
                  <p className="text-sm text-gray-600">First 100 spots at special rate</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">45% filled</span>
                    <span className="text-sm text-gray-500">28 days remaining</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-24 flex-shrink-0">
                  <div className="text-sm font-bold">Apr 15</div>
                  <div className="text-xs text-gray-500">2 weeks</div>
                </div>
                <div className="flex-grow p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-medium">Speaker Announcements</h4>
                  <p className="text-sm text-gray-600">Keynote and track speakers reveal</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Coming up</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-24 flex-shrink-0">
                  <div className="text-sm font-bold">May 1</div>
                  <div className="text-xs text-gray-500">1 month</div>
                </div>
                <div className="flex-grow p-3 bg-gray-50 rounded-lg border-l-4 border-gray-300">
                  <h4 className="font-medium">Schedule Release</h4>
                  <p className="text-sm text-gray-600">Detailed agenda and session tracks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Schedule Optimization</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold mb-3">Attendance Predictions</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Morning Sessions</span>
                  <span className="font-medium">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Afternoon Sessions</span>
                  <span className="font-medium">72%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Evening Sessions</span>
                  <span className="font-medium">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-bold mb-3">Scheduling Conflicts</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-red-600">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                AI Workshop overlaps with Cloud Security
              </div>
              <div className="flex items-center gap-2 text-sm text-yellow-600">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                Networking break too short between tracks
              </div>
            </div>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-bold mb-3">Smart Recommendations</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Move high-demand sessions to morning
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Add buffer time between major tracks
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Schedule similar topics in parallel
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card className="lg:col-span-3">
      <CardHeader>
        <CardTitle>Session Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Time</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Session</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Speaker</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Track</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Room</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Capacity</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-3">9:00 AM</td>
                <td className="px-4 py-3">AI in Enterprise</td>
                <td className="px-4 py-3">Dr. Sarah Chen</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Main Track</span>
                </td>
                <td className="px-4 py-3">Grand Hall</td>
                <td className="px-4 py-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Confirmed</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">10:30 AM</td>
                <td className="px-4 py-3">Cloud Security</td>
                <td className="px-4 py-3">John Smith</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Technical</span>
                </td>
                <td className="px-4 py-3">Room B</td>
                <td className="px-4 py-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Pending</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  </div>
);

export {
  TargetingContent,
  ScheduleContent,
  AudienceSegment,
  CampaignItem,
  ProgressBar,
  ViewToggle,
};