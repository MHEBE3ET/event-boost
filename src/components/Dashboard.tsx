import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './core';

const Dashboard = () => {
  const eventMetrics = {
    targetAttendees: 200,
    confirmedAttendees: 85,
    engagementScore: 76,
    riskScore: 'Medium',
    recommendedActions: [
      'Engage with 45 past attendees who haven\'t responded',
      'Activate early-bird pricing for next 48 hours',
      'Target 3 new LinkedIn groups in the fintech sector'
    ]
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Attendance Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Target</span>
              <span className="font-bold">{eventMetrics.targetAttendees}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Confirmed</span>
              <span className="font-bold">{eventMetrics.confirmedAttendees}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${(eventMetrics.confirmedAttendees / eventMetrics.targetAttendees) * 100}%` }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Risk Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Engagement Score</span>
              <span className="font-bold">{eventMetrics.engagementScore}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Risk Level</span>
              <span className="font-bold text-yellow-500">{eventMetrics.riskScore}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {eventMetrics.recommendedActions.map((action, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm text-blue-600">{index + 1}</span>
                </div>
                <span className="text-sm">{action}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;