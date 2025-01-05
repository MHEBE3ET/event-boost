// Targeting.tsx
import React, { useState } from 'react';

export const Targeting: React.FC = () => {
  const [activeView, setActiveView] = useState<'segments' | 'leads' | 'campaigns'>('segments');

  const AudienceView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Smart Audience Segments */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Smart Audience Segments</h2>
        {/* Past Event Attendees */}
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3>Past Event Attendees</h3>
              <p className="text-gray-600">666 contacts</p>
            </div>
            <button className="px-4 py-1 bg-blue-600 text-white rounded">Target</button>
          </div>
          <div className="flex gap-2">
            <span className="text-blue-600 text-sm">Tech Leaders</span>
            <span className="text-blue-600 text-sm">High Engagement</span>
            <span className="text-blue-600 text-sm">Previous Attendees</span>
          </div>
        </div>
        {/* LinkedIn Tech Groups */}
        <div className="bg-purple-50 p-4 rounded-lg mb-4">
          {/* Similar structure */}
        </div>
        {/* Similar Event Attendees */}
        <div className="bg-green-50 p-4 rounded-lg">
          {/* Similar structure */}
        </div>
      </div>

      {/* Campaign Management */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Campaign Management</h2>
        {/* Campaign content */}
      </div>
    </div>
  );

  const LeadManagementView = () => (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 border rounded hover:bg-gray-50">
            <span className="text-gray-500">⌦</span> Filter
          </button>
          <select className="px-3 py-2 border rounded">
            <option>All Leads</option>
            <option>Hot Leads</option>
            <option>New Leads</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 border rounded hover:bg-gray-50">Export</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Add Lead</button>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2">Name</th>
            <th className="py-2">Company</th>
            <th className="py-2">Role</th>
            <th className="py-2">Lead Score</th>
            <th className="py-2">Last Activity</th>
            <th className="py-2">Stage</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3">Sarah Chen</td>
            <td>Microsoft</td>
            <td>Tech Lead</td>
            <td>⭐⭐⭐</td>
            <td>Registered (2 days ago)</td>
            <td><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Qualified</span></td>
            <td><button className="text-blue-600">Contact</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const CampaignsView = () => (
    <div className="p-4">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Active Campaigns</h2>
        {/* Your existing campaign content */}
      </div>
    </div>
  );

  return (
    <div className="p-6">
      {/* Sub-navigation */}
      <div className="mb-6 border-b">
        <div className="flex gap-6">
          <button
            className={`pb-2 px-1 ${activeView === 'segments' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveView('segments')}
          >
            Audience Segments
          </button>
          <button
            className={`pb-2 px-1 ${activeView === 'leads' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveView('leads')}
          >
            Lead Management
          </button>
          <button
            className={`pb-2 px-1 ${activeView === 'campaigns' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveView('campaigns')}
          >
            Campaigns
          </button>
        </div>
      </div>

      {/* Content based on active view */}
      {activeView === 'segments' && <AudienceView />}
      {activeView === 'leads' && <LeadManagementView />}
      {activeView === 'campaigns' && <CampaignsView />}
    </div>
  );
};

export default Targeting;