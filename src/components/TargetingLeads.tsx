// TargetingLeads.tsx (simplified version matching the screenshot)
import React from 'react';

export const TargetingLeads: React.FC = () => {
  return (
    <>
      {/* Left Column */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Smart Audience Segments</h2>

        {/* Past Event Attendees */}
        <div className="bg-blue-50 p-4 rounded-lg">
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
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3>LinkedIn Tech Groups</h3>
              <p className="text-gray-600">3,890 contacts</p>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="text-purple-600 text-sm">Software Engineers</span>
            <span className="text-purple-600 text-sm">Active Discussion</span>
            <span className="text-purple-600 text-sm">Tech Community</span>
          </div>
        </div>

        {/* Similar Event Attendees */}
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3>Similar Event Attendees</h3>
              <p className="text-gray-600">2,567 contacts</p>
            </div>
            <button className="px-4 py-1 bg-green-600 text-white rounded">Target</button>
          </div>
          <div className="flex gap-2">
            <span className="text-green-600 text-sm">Event Goers</span>
            <span className="text-green-600 text-sm">Tech Interest</span>
            <span className="text-green-600 text-sm">Industry Match</span>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div>
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Campaign Management</h2>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Active Campaigns</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <p>Another Campaign</p>
                  <p className="text-sm text-gray-600">0 clicks • 0% conversion</p>
                </div>
                <button className="text-blue-600">Edit</button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p>Very First Campaign</p>
                  <p className="text-sm text-gray-600">0 clicks • 0% conversion</p>
                </div>
                <button className="text-blue-600">Edit</button>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Campaign Performance</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Email Open Rate</span>
                  <span>42%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 rounded-full h-2 w-[42%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Click-through Rate</span>
                  <span>28%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 rounded-full h-2 w-[28%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Registration Rate</span>
                  <span>12%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 rounded-full h-2 w-[12%]"></div>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full py-2 bg-blue-600 text-white rounded">
            Create New Campaign
          </button>
        </div>
      </div>
    </>
  );
};

export default TargetingLeads;