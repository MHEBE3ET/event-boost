"use client";

import React, { useState, Suspense } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  ErrorBoundary,
  LoadingSpinner,
  ErrorFallback
} from './core';
import Dashboard from './Dashboard';
import { TargetingContent, ScheduleContent } from './TargetingSchedule';  // Add this import
import { GamificationContent, DynamicContent } from './GamificationDynamic';  // Add this import
import {
  Users,
  Target,
  Bell,
  Calendar,
  TrendingUp,
  Trophy,
  Star
} from 'lucide-react';



interface MetricCardProps {
  title: string;
  value: string;
  trend: string;
  bgColor: string;
  textColor: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, trend, bgColor, textColor }) => (
  <div className={`p-4 ${bgColor} dark:bg-gray-800 rounded-lg`}>
    <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</h3>
    <p className={`text-2xl font-bold ${textColor} dark:text-white`}>{value}</p>
    <span className="text-sm text-blue-600 dark:text-blue-400">{trend}</span>
  </div>
);

interface ProgressBarProps {
  label: string;
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value }) => (
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${value}%` }}></div>
    </div>
  </div>
);

interface CommunicationPreferenceProps {
  color: string;
  label: string;
  value: number;
}

const CommunicationPreference: React.FC<CommunicationPreferenceProps> = ({ color, label, value }) => (
  <li className="flex items-center justify-between text-sm">
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 bg-${color}-500 rounded-full`}></div>
      <span>{label}</span>
    </div>
    <span>{value}%</span>
  </li>
);

// Tab Content Components
const AudienceContent: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Audience Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MetricCard
              title="Total Registrations"
              value="1,245"
              trend="↑ 12% vs last event"
              bgColor="bg-blue-50"
              textColor="text-blue-600"
            />
            <MetricCard
              title="Average Seniority"
              value="Senior+"
              trend="72% decision makers"
              bgColor="bg-green-50"
              textColor="text-green-600"
            />
            <MetricCard
              title="Industry Mix"
              value="Tech 65%"
              trend="Finance 25%, Other 10%"
              bgColor="bg-purple-50"
              textColor="text-purple-600"
            />
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-bold mb-4">Engagement Timeline</h3>
            <div className="h-48 w-full bg-gray-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-bold mb-3">Top Companies</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span>Microsoft</span>
                  <span className="text-blue-600">45 attendees</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Google</span>
                  <span className="text-blue-600">38 attendees</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Amazon</span>
                  <span className="text-blue-600">32 attendees</span>
                </li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-bold mb-3">Geographic Distribution</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span>North America</span>
                  <span className="text-blue-600">45%</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Europe</span>
                  <span className="text-blue-600">30%</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Asia Pacific</span>
                  <span className="text-blue-600">25%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Interest Signals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-bold mb-3">Hot Topics</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">AI/ML (235)</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Cloud (198)</span>
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Security (156)</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">DevOps (142)</span>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Data (98)</span>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-bold mb-3">Content Preferences</h3>
            <div className="space-y-2">
              <ProgressBar label="Workshops" value={68} />
              <ProgressBar label="Panel Discussions" value={45} />
              <ProgressBar label="Networking" value={42} />
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-bold mb-3">Communication Preferences</h3>
            <ul className="space-y-2">
              <CommunicationPreference color="blue" label="Email" value={72} />
              <CommunicationPreference color="purple" label="LinkedIn" value={58} />
              <CommunicationPreference color="green" label="Mobile App" value={34} />
            </ul>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
            Export Audience Report
          </button>
        </div>
      </CardContent>
    </Card>

    <Card className="lg:col-span-3">
      <CardHeader>
        <CardTitle>Audience Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <th scope="col" className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Name</th>
                <th scope="col" className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Company</th>
                <th scope="col" className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Role</th>
                <th scope="col" className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Interest Level</th>
                <th scope="col" className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Last Interaction</th>
                <th scope="col" className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                <th scope="col" className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-4 py-3 dark:text-gray-300">Sarah Chen</td>
                <td className="px-4 py-3 dark:text-gray-300">Microsoft</td>
                <td className="px-4 py-3 dark:text-gray-300">Tech Lead</td>
                <td className="px-4 py-3">
                  <div className="flex">
                    <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                    <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                    <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                  </div>
                </td>
                <td className="px-4 py-3 dark:text-gray-300">2 days ago</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded text-xs">Registered</span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-blue-600 dark:text-blue-400 text-sm">Follow up</button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 dark:text-gray-300">John Smith</td>
                <td className="px-4 py-3 dark:text-gray-300">Google</td>
                <td className="px-4 py-3 dark:text-gray-300">Engineering Manager</td>
                <td className="px-4 py-3">
                  <div className="flex">
                    <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                    <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                  </div>
                </td>
                <td className="px-4 py-3 dark:text-gray-300">5 days ago</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded text-xs">Interested</span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-blue-600 dark:text-blue-400 text-sm">Send reminder</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  </div >
);

const EventBoostApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold dark:text-white">EventBoost</h1>
          <p className="text-gray-500 dark:text-gray-400">Smart Event Marketing Platform</p>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="w-6 h-6 text-gray-400" />
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="flex flex-wrap gap-2 overflow-x-auto md:grid md:grid-cols-6 mb-8">
          <TabsTrigger value="dashboard" className="flex items-center gap-2 w-full sm:w-auto">
            <TrendingUp className="w-4 h-4" />
            <span className="whitespace-nowrap">Dashboard</span>
          </TabsTrigger>
          <TabsTrigger value="audience" className="flex items-center gap-2 w-full sm:w-auto">
            <Users className="w-4 h-4" />
            <span className="whitespace-nowrap">Audience</span>
          </TabsTrigger>
          <TabsTrigger value="targeting" className="flex items-center gap-2 w-full sm:w-auto">
            <Target className="w-4 h-4" />
            <span className="whitespace-nowrap">Targeting</span>
          </TabsTrigger>
          <TabsTrigger value="schedule" className="flex items-center gap-2 w-full sm:w-auto">
            <Calendar className="w-4 h-4" />
            <span className="whitespace-nowrap">Schedule</span>
          </TabsTrigger>
          <TabsTrigger value="gamification" className="flex items-center gap-2 w-full sm:w-auto">
            <Trophy className="w-4 h-4" />
            <span className="whitespace-nowrap">Gamify</span>
          </TabsTrigger>
          <TabsTrigger value="dynamic" className="flex items-center gap-2 w-full sm:w-auto">
            <Star className="w-4 h-4" />
            <span className="whitespace-nowrap">Dynamic</span>
          </TabsTrigger>
        </TabsList>

        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingSpinner />}>
            <TabsContent value="dashboard">
              <Dashboard />
            </TabsContent>

            <TabsContent value="audience">
              <AudienceContent />
            </TabsContent>

            <TabsContent value="targeting">
              <TargetingContent />
            </TabsContent>

            <TabsContent value="schedule">
              <ScheduleContent />
            </TabsContent>

            <TabsContent value="gamification">
              <GamificationContent />
            </TabsContent>

            <TabsContent value="dynamic">
              <DynamicContent />
            </TabsContent>
          </Suspense>
        </ErrorBoundary>
      </Tabs>
    </div>
  );
};

// Tab Content Components


// Additional tab content components would follow here...
// TargetingContent, ScheduleContent, GamificationContent, DynamicContent

export default EventBoostApp;