"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './core';

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

const TargetingContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card>
      <CardHeader>
        <CardTitle>Smart Audience Segments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <AudienceSegment
            title="Past Event Attendees"
            contacts="1,245"
            bgColor="bg-blue-50"
            tags={['Tech Leaders', 'High Engagement', 'Previous Attendees']}
            buttonColor="bg-blue-600"
          />

          <AudienceSegment
            title="LinkedIn Tech Groups"
            contacts="3,890"
            bgColor="bg-purple-50"
            tags={['Software Engineers', 'Active Discussion', 'Tech Community']}
            buttonColor="bg-purple-600"
          />

          <AudienceSegment
            title="Similar Event Attendees"
            contacts="2,567"
            bgColor="bg-green-50"
            tags={['Event Goers', 'Tech Interest', 'Industry Match']}
            buttonColor="bg-green-600"
          />
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Campaign Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold mb-3">Active Campaigns</h3>
            <div className="space-y-3">
              <CampaignItem
                status="green"
                name="Early Bird Campaign"
                stats="245 clicks • 12% conversion"
              />
              <CampaignItem
                status="yellow"
                name="LinkedIn Tech Group"
                stats="189 clicks • 8% conversion"
              />
              <CampaignItem
                status="purple"
                name="Past Attendee Referral"
                stats="312 clicks • 15% conversion"
              />
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

          <button className="w-full py-2 bg-blue-600 text-white rounded-lg">
            Create New Campaign
          </button>
        </div>
      </CardContent>
    </Card>
  </div>
);

const ScheduleContent = () => (
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
              {/* Timeline content */}
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
            </div>
          </div>
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
  ViewToggle
};