
import { ReactNode, ReactElement } from 'react';

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
  children: ReactNode;
  className?: string;
}

export interface MetricCardProps {
  title: string;
  value: string;
  trend: string;
  bgColor: string;
  textColor: string;
}

export interface AudienceSegmentProps {
  title: string;
  contacts: string;
  bgColor: string;
  tags: string[];
  buttonColor: string;
}

export interface AchievementProps {
  icon: ReactNode;
  title: string;
  description: string;
  earned: number;
}

export interface EngagementBoosterProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ProgressBarProps {
  label: string;
  value: number;
}

export interface InterestBarProps {
  topic: string;
  percentage: number;
}

export interface PreferenceItemProps {
  format: string;
  percentage: number;
}

export interface AdjustmentItemProps {
  color: 'green' | 'yellow' | 'red';
  text: string;
}

// Error Boundary Types
export interface ErrorBoundaryProps {
  children: ReactNode;
  FallbackComponent: (props: { error: Error }) => ReactElement;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}