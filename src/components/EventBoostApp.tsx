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
  Gift,
  Timer,
  Award,
  Sparkles,
  Star
} from 'lucide-react';

const EventBoostApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">EventBoost</h1>
          <p className="text-gray-500">Smart Event Marketing Platform</p>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="w-6 h-6 text-gray-400" />
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
        </div>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6 mb-8">
          <TabsTrigger value="dashboard" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="audience" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Audience
          </TabsTrigger>
          <TabsTrigger value="targeting" className="flex items-center gap-2">
            <Target className="w-4 h-4" />
            Targeting
          </TabsTrigger>
          <TabsTrigger value="schedule" className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Schedule
          </TabsTrigger>
          <TabsTrigger value="gamification" className="flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            Gamify
          </TabsTrigger>
          <TabsTrigger value="dynamic" className="flex items-center gap-2">
            <Star className="w-4 h-4" />
            Dynamic
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
const AudienceContent = () => (
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
          {/* Rest of the audience analytics content */}
        </div>
      </CardContent>
    </Card>
    {/* More audience content cards */}
  </div>
);


interface MetricCardProps {
  title: string;
  value: string;
  trend: string;
  bgColor: string;
  textColor: string;
}
const MetricCard: React.FC<MetricCardProps> = ({ title, value, trend, bgColor, textColor }) => (
  <div className={`p-4 ${bgColor} rounded-lg`}>
    <h3 className="text-sm font-medium text-gray-600">{title}</h3>
    <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
    <span className="text-sm text-blue-600">{trend}</span>
  </div>
);

// Additional tab content components would follow here...
// TargetingContent, ScheduleContent, GamificationContent, DynamicContent

export default EventBoostApp;