"use client";

import React, { ReactNode } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './core';
import {
  Trophy,
  Gift,
  Timer,
  Award
} from 'lucide-react';

// TypeScript interfaces
interface EngagementBoosterProps {
  icon: ReactNode;
  title: string;
  description: string;
}

interface AchievementProps {
  icon: ReactNode;
  title: string;
  description: string;
  earned: number;
}

interface InterestBarProps {
  topic: string;
  percentage: number;
}

interface AdjustmentItemProps {
  color: string;
  text: string;
}

interface PreferenceItemProps {
  format: string;
  percentage: number;
}

// Component definitions
const EngagementBooster: React.FC<EngagementBoosterProps> = ({ icon, title, description }) => (
  <div className="p-4 border rounded-lg">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="font-bold">{title}</h3>
      </div>
      <button className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
        Activate
      </button>
    </div>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const Achievement: React.FC<AchievementProps> = ({ icon, title, description, earned }) => (
  <div className="flex items-center justify-between p-3 border rounded-lg">
    <div className="flex items-center gap-3">
      {icon}
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
    <span className="text-sm font-medium">{earned} earned</span>
  </div>
);

const InterestBar: React.FC<InterestBarProps> = ({ topic, percentage }) => (
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span>{topic}</span>
      <span>{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-600 h-2 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const AdjustmentList: React.FC = () => (
  <ul className="space-y-2">
    <AdjustmentItem color="green" text="Add AI/ML workshop track" />
    <AdjustmentItem color="yellow" text="Extend cloud sessions" />
    <AdjustmentItem color="red" text="Reduce DevOps content" />
  </ul>
);

const AdjustmentItem: React.FC<AdjustmentItemProps> = ({ color, text }) => (
  <li className="flex items-center gap-2 text-sm">
    <span className={`w-2 h-2 bg-${color}-500 rounded-full`}></span>
    {text}
  </li>
);

const ActivePoll: React.FC = () => (
  <div className="p-4 border rounded-lg">
    <h3 className="font-bold mb-3">Active Poll</h3>
    <p className="text-sm text-gray-600 mb-4">Which topic interests you most?</p>
    <div className="space-y-2">
      <button className="w-full p-2 text-left border rounded hover:bg-gray-50 text-sm">
        Advanced AI Applications
      </button>
      <button className="w-full p-2 text-left border rounded hover:bg-gray-50 text-sm">
        Cloud Security
      </button>
      <button className="w-full p-2 text-left border rounded hover:bg-gray-50 text-sm">
        Kubernetes Best Practices
      </button>
    </div>
  </div>
);

const SessionPreferences: React.FC = () => (
  <div className="p-4 border rounded-lg">
    <h3 className="font-bold mb-3">Session Format Preferences</h3>
    <div className="space-y-3">
      <PreferenceItem format="Interactive Workshops" percentage={64} />
      <PreferenceItem format="Panel Discussions" percentage={28} />
      <PreferenceItem format="Keynote Presentations" percentage={8} />
    </div>
  </div>
);

const PreferenceItem: React.FC<PreferenceItemProps> = ({ format, percentage }) => (
  <div className="flex items-center justify-between text-sm">
    <span>{format}</span>
    <span className="font-medium">{percentage}%</span>
  </div>
);

const GamificationContent: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card>
      <CardHeader>
        <CardTitle>Engagement Boosters</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <EngagementBooster
            icon={<Trophy className="w-5 h-5 text-yellow-500" />}
            title="Early Bird Challenge"
            description="First 50 registrants get exclusive VIP networking session"
          />

          <EngagementBooster
            icon={<Gift className="w-5 h-5 text-purple-500" />}
            title="Referral Rewards"
            description="Bring 3 colleagues, get premium content access"
          />

          <EngagementBooster
            icon={<Timer className="w-5 h-5 text-blue-500" />}
            title="Flash Registration"
            description="24-hour special rate with countdown timer"
          />
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Achievement System</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Achievement
            icon={<Award className="w-6 h-6 text-blue-500" />}
            title="Community Builder"
            description="Invite 5+ colleagues"
            earned={12}
          />

          <Achievement
            icon={<Award className="w-6 h-6 text-purple-500" />}
            title="Early Adopter"
            description="Register in first 24h"
            earned={28}
          />

          <Achievement
            icon={<Award className="w-6 h-6 text-green-500" />}
            title="Industry Leader"
            description="C-level registration"
            earned={5}
          />
        </div>
      </CardContent>
    </Card>
  </div>
);

const DynamicContent: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card>
      <CardHeader>
        <CardTitle>Dynamic Content Adaptation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold mb-2">Audience Interest Analysis</h3>
            <div className="space-y-2">
              <InterestBar topic="AI/ML Topics" percentage={78} />
              <InterestBar topic="Cloud Architecture" percentage={65} />
              <InterestBar topic="DevOps" percentage={45} />
            </div>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-bold mb-2">Recommended Adjustments</h3>
            <AdjustmentList />
          </div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Real-time Content Polling</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ActivePoll />
          <SessionPreferences />
        </div>
      </CardContent>
    </Card>
  </div>
);

export {
  GamificationContent,
  DynamicContent,
  EngagementBooster,
  Achievement,
  InterestBar,
  AdjustmentList,
  AdjustmentItem,
  ActivePoll,
  SessionPreferences,
  PreferenceItem
};