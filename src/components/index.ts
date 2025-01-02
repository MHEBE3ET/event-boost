// Core Components
"use client";

import React, { useState } from 'react';

export {
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

// Main App
export { default as EventBoostApp } from './EventBoostApp';

// Dashboard
export { default as Dashboard } from './Dashboard';

// Targeting and Schedule
export {
  TargetingContent,
  ScheduleContent,
  AudienceSegment,
  CampaignItem,
  ProgressBar,
  ViewToggle
} from './TargetingSchedule';

// Gamification and Dynamic
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
} from './GamificationDynamic';

// Re-export icons for convenience
export {
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