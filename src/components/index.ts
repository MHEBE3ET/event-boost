// Core Components
"use client";

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

export { default as EventBoostApp } from './EventBoostApp';
export { default as Dashboard } from './Dashboard';

export {
  TargetingContent,
  ScheduleContent,
  AudienceSegment,
  CampaignItem,
  ProgressBar,
  ViewToggle
} from './TargetingSchedule';

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