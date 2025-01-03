import React, { useState, Suspense, Component } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

// Error Boundary Class Component
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.FallbackComponent({ error: this.state.error });
        }
        return this.props.children;
    }
}

// Loading fallback component
const LoadingSpinner = () => (
    <div className="flex items-center justify-center w-full h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
);

// Error fallback component
const ErrorFallback = ({ error }) => (
    <div className="text-center p-6 bg-red-50 rounded-lg">
        <h2 className="text-lg font-bold text-red-600 mb-2">Something went wrong</h2>
        <p className="text-sm text-red-500">{error.message}</p>
    </div>
);

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
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <Card className="lg:col-span-2">
                                    <CardHeader>
                                        <CardTitle>Audience Analytics</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div className="p-4 bg-blue-50 rounded-lg">
                                                    <h3 className="text-sm font-medium text-gray-600">Total Registrations</h3>
                                                    <p className="text-2xl font-bold text-blue-600">1,245</p>
                                                    <span className="text-sm text-green-600">↑ 12% vs last event</span>
                                                </div>
                                                <div className="p-4 bg-green-50 rounded-lg">
                                                    <h3 className="text-sm font-medium text-gray-600">Average Seniority</h3>
                                                    <p className="text-2xl font-bold text-green-600">Senior+</p>
                                                    <span className="text-sm text-blue-600">72% decision makers</span>
                                                </div>
                                                <div className="p-4 bg-purple-50 rounded-lg">
                                                    <h3 className="text-sm font-medium text-gray-600">Industry Mix</h3>
                                                    <p className="text-2xl font-bold text-purple-600">Tech 65%</p>
                                                    <span className="text-sm text-blue-600">Finance 25%, Other 10%</span>
                                                </div>
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
                                                    <div>
                                                        <div className="flex justify-between text-sm mb-1">
                                                            <span>Workshops</span>
                                                            <span>68%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex justify-between text-sm mb-1">
                                                            <span>Panel Discussions</span>
                                                            <span>45%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex justify-between text-sm mb-1">
                                                            <span>Networking</span>
                                                            <span>42%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border rounded-lg p-4">
                                                <h3 className="font-bold mb-3">Communication Preferences</h3>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center justify-between text-sm">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                                            <span>Email</span>
                                                        </div>
                                                        <span>72%</span>
                                                    </li>
                                                    <li className="flex items-center justify-between text-sm">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                                            <span>LinkedIn</span>
                                                        </div>
                                                        <span>58%</span>
                                                    </li>
                                                    <li className="flex items-center justify-between text-sm">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                                            <span>Mobile App</span>
                                                        </div>
                                                        <span>34%</span>
                                                    </li>
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
                                                    <tr className="bg-gray-50">
                                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Name</th>
                                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Company</th>
                                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Role</th>
                                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Interest Level</th>
                                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Last Interaction</th>
                                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
                                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y">
                                                    <tr>
                                                        <td className="px-4 py-3">Sarah Chen</td>
                                                        <td className="px-4 py-3">Microsoft</td>
                                                        <td className="px-4 py-3">Tech Lead</td>
                                                        <td className="px-4 py-3">
                                                            <div className="flex">
                                                                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                                                                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                                                                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3">2 days ago</td>
                                                        <td className="px-4 py-3">
                                                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Registered</span>
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            <button className="text-blue-600 text-sm">Follow up</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-3">John Smith</td>
                                                        <td className="px-4 py-3">Google</td>
                                                        <td className="px-4 py-3">Engineering Manager</td>
                                                        <td className="px-4 py-3">
                                                            <div className="flex">
                                                                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                                                                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3">5 days ago</td>
                                                        <td className="px-4 py-3">
                                                            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Interested</span>
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            <button className="text-blue-600 text-sm">Send reminder</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="targeting">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Smart Audience Segments</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="p-4 border rounded-lg bg-blue-50">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div>
                                                        <h3 className="font-bold">Past Event Attendees</h3>
                                                        <p className="text-sm text-gray-600">1,245 contacts</p>
                                                    </div>
                                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
                                                        Target
                                                    </button>
                                                </div>
                                                <div className="flex gap-2 flex-wrap">
                                                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Tech Leaders</span>
                                                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">High Engagement</span>
                                                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Previous Attendees</span>
                                                </div>
                                            </div>

                                            <div className="p-4 border rounded-lg bg-purple-50">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div>
                                                        <h3 className="font-bold">LinkedIn Tech Groups</h3>
                                                        <p className="text-sm text-gray-600">3,890 members</p>
                                                    </div>
                                                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm">
                                                        Target
                                                    </button>
                                                </div>
                                                <div className="flex gap-2 flex-wrap">
                                                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Software Engineers</span>
                                                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Active Discussion</span>
                                                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Tech Community</span>
                                                </div>
                                            </div>

                                            <div className="p-4 border rounded-lg bg-green-50">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div>
                                                        <h3 className="font-bold">Similar Event Attendees</h3>
                                                        <p className="text-sm text-gray-600">2,567 contacts</p>
                                                    </div>
                                                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm">
                                                        Target
                                                    </button>
                                                </div>
                                                <div className="flex gap-2 flex-wrap">
                                                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Event Goers</span>
                                                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Tech Interest</span>
                                                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Industry Match</span>
                                                </div>
                                            </div>
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
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                            <div>
                                                                <p className="font-medium">Early Bird Campaign</p>
                                                                <p className="text-sm text-gray-500">245 clicks • 12% conversion</p>
                                                            </div>
                                                        </div>
                                                        <button className="text-blue-600 text-sm">Edit</button>
                                                    </div>

                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                                            <div>
                                                                <p className="font-medium">LinkedIn Tech Group</p>
                                                                <p className="text-sm text-gray-500">189 clicks • 8% conversion</p>
                                                            </div>
                                                        </div>
                                                        <button className="text-blue-600 text-sm">Edit</button>
                                                    </div>

                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                            <div>
                                                                <p className="font-medium">Past Attendee Referral</p>
                                                                <p className="text-sm text-gray-500">312 clicks • 15% conversion</p>
                                                            </div>
                                                        </div>
                                                        <button className="text-blue-600 text-sm">Edit</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-4 border rounded-lg">
                                                <h3 className="font-bold mb-3">Campaign Performance</h3>
                                                <div className="space-y-3">
                                                    <div>
                                                        <div className="flex justify-between text-sm mb-1">
                                                            <span>Email Open Rate</span>
                                                            <span>42%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex justify-between text-sm mb-1">
                                                            <span>Click-through Rate</span>
                                                            <span>28%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '28%' }}></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex justify-between text-sm mb-1">
                                                            <span>Registration Rate</span>
                                                            <span>12%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '12%' }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <button className="w-full py-2 bg-blue-600 text-white rounded-lg">
                                                Create New Campaign
                                            </button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="schedule">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <Card className="lg:col-span-2">
                                    <CardHeader>
                                        <CardTitle>Event Timeline</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-6">
                                            <div className="flex justify-between items-center">
                                                <h3 className="font-bold">Tech Innovation Summit 2024</h3>
                                                <div className="flex gap-2">
                                                    <button className="px-3 py-1 text-sm border rounded-lg hover:bg-gray-50">Week</button>
                                                    <button className="px-3 py-1 text-sm border rounded-lg bg-blue-50 text-blue-600">Month</button>
                                                    <button className="px-3 py-1 text-sm border rounded-lg hover:bg-gray-50">Quarter</button>
                                                </div>
                                            </div>

                                            <div className="border rounded-lg p-4">
                                                <div className="space-y-4">
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

                                                    <div className="flex items-start gap-4">
                                                        <div className="w-24 flex-shrink-0">
                                                            <div className="text-sm font-bold">Apr 15</div>
                                                            <div className="text-xs text-gray-500">2 weeks</div>
                                                        </div>
                                                        <div className="flex-grow p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                                                            <h4 className="font-medium">Speaker Announcements</h4>
                                                            <p className="text-sm text-gray-600">Keynote and track speakers reveal</p>
                                                            <div className="mt-2 flex items-center gap-2">
                                                                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Coming up</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start gap-4">
                                                        <div className="w-24 flex-shrink-0">
                                                            <div className="text-sm font-bold">May 1</div>
                                                            <div className="text-xs text-gray-500">1 month</div>
                                                        </div>
                                                        <div className="flex-grow p-3 bg-gray-50 rounded-lg border-l-4 border-gray-300">
                                                            <h4 className="font-medium">Schedule Release</h4>
                                                            <p className="text-sm text-gray-600">Detailed agenda and session tracks</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Schedule Optimization</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="p-4 border rounded-lg">
                                                <h3 className="font-bold mb-3">Attendance Predictions</h3>
                                                <div className="space-y-3">
                                                    <div>
                                                        <div className="flex justify-between text-sm mb-1">
                                                            <span>Morning Sessions</span>
                                                            <span className="font-medium">85%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex justify-between text-sm mb-1">
                                                            <span>Afternoon Sessions</span>
                                                            <span className="font-medium">72%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                            <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex justify-between text-sm mb-1">
                                                            <span>Evening Sessions</span>
                                                            <span className="font-medium">45%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                            <div className="bg-red-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-4 border rounded-lg">
                                                <h3 className="font-bold mb-3">Scheduling Conflicts</h3>
                                                <div className="space-y-2">
                                                    <div className="flex items-center gap-2 text-sm text-red-600">
                                                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                                        AI Workshop overlaps with Cloud Security
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-yellow-600">
                                                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                                        Networking break too short between tracks
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-4 border rounded-lg">
                                                <h3 className="font-bold mb-3">Smart Recommendations</h3>
                                                <ul className="space-y-2 text-sm">
                                                    <li className="flex items-center gap-2">
                                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                        Move high-demand sessions to morning
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                        Add buffer time between major tracks
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                        Schedule similar topics in parallel
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="lg:col-span-3">
                                    <CardHeader>
                                        <CardTitle>Session Management</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full">
                                                <thead>
                                                    <tr className="bg-gray-50">
                                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Time</th>
                                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Session</th>
                                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Speaker</th>
                                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Track</th>
                                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Room</th>
                                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Capacity</th>
                                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y">
                                                    <tr>
                                                        <td className="px-4 py-3">9:00 AM</td>
                                                        <td className="px-4 py-3">AI in Enterprise</td>
                                                        <td className="px-4 py-3">Dr. Sarah Chen</td>
                                                        <td className="px-4 py-3">
                                                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Main Track</span>
                                                        </td>
                                                        <td className="px-4 py-3">Grand Hall</td>
                                                        <td className="px-4 py-3">
                                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                                <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Confirmed</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-3">10:30 AM</td>
                                                        <td className="px-4 py-3">Cloud Security</td>
                                                        <td className="px-4 py-3">John Smith</td>
                                                        <td className="px-4 py-3">
                                                            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Technical</span>
                                                        </td>
                                                        <td className="px-4 py-3">Room B</td>
                                                        <td className="px-4 py-3">
                                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                                <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Pending</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="gamification">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Engagement Boosters</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="p-4 border rounded-lg">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="flex items-center gap-2">
                                                        <Trophy className="w-5 h-5 text-yellow-500" />
                                                        <h3 className="font-bold">Early Bird Challenge</h3>
                                                    </div>
                                                    <button className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
                                                        Activate
                                                    </button>
                                                </div>
                                                <p className="text-sm text-gray-600">First 50 registrants get exclusive VIP networking session</p>
                                            </div>

                                            <div className="p-4 border rounded-lg">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="flex items-center gap-2">
                                                        <Gift className="w-5 h-5 text-purple-500" />
                                                        <h3 className="font-bold">Referral Rewards</h3>
                                                    </div>
                                                    <button className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
                                                        Activate
                                                    </button>
                                                </div>
                                                <p className="text-sm text-gray-600">Bring 3 colleagues, get premium content access</p>
                                            </div>

                                            <div className="p-4 border rounded-lg">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="flex items-center gap-2">
                                                        <Timer className="w-5 h-5 text-blue-500" />
                                                        <h3 className="font-bold">Flash Registration</h3>
                                                    </div>
                                                    <button className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
                                                        Activate
                                                    </button>
                                                </div>
                                                <p className="text-sm text-gray-600">24-hour special rate with countdown timer</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Achievement System</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between p-3 border rounded-lg">
                                                <div className="flex items-center gap-3">
                                                    <Award className="w-6 h-6 text-blue-500" />
                                                    <div>
                                                        <h4 className="font-medium">Community Builder</h4>
                                                        <p className="text-sm text-gray-500">Invite 5+ colleagues</p>
                                                    </div>
                                                </div>
                                                <span className="text-sm font-medium">12 earned</span>
                                            </div>

                                            <div className="flex items-center justify-between p-3 border rounded-lg">
                                                <div className="flex items-center gap-3">
                                                    <Award className="w-6 h-6 text-purple-500" />
                                                    <div>
                                                        <h4 className="font-medium">Early Adopter</h4>
                                                        <p className="text-sm text-gray-500">Register in first 24h</p>
                                                    </div>
                                                </div>
                                                <span className="text-sm font-medium">28 earned</span>
                                            </div>

                                            <div className="flex items-center justify-between p-3 border rounded-lg">
                                                <div className="flex items-center gap-3">
                                                    <Award className="w-6 h-6 text-green-500" />
                                                    <div>
                                                        <h4 className="font-medium">Industry Leader</h4>
                                                        <p className="text-sm text-gray-500">C-level registration</p>
                                                    </div>
                                                </div>
                                                <span className="text-sm font-medium">5 earned</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="dynamic">
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
                                                    <div>
                                                        <div className="flex justify-between text-sm mb-1">
                                                            <span>AI/ML Topics</span>
                                                            <span>78%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex justify-between text-sm mb-1">
                                                            <span>Cloud Architecture</span>
                                                            <span>65%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex justify-between text-sm mb-1">
                                                            <span>DevOps</span>
                                                            <span>45%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-4 border rounded-lg">
                                                <h3 className="font-bold mb-2">Recommended Adjustments</h3>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center gap-2 text-sm">
                                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                        Add AI/ML workshop track
                                                    </li>
                                                    <li className="flex items-center gap-2 text-sm">
                                                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                                        Extend cloud sessions
                                                    </li>
                                                    <li className="flex items-center gap-2 text-sm">
                                                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                                        Reduce DevOps content
                                                    </li>
                                                </ul>
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

                                            <div className="p-4 border rounded-lg">
                                                <h3 className="font-bold mb-3">Session Format Preferences</h3>
                                                <div className="space-y-3">
                                                    <div className="flex items-center justify-between text-sm">
                                                        <span>Interactive Workshops</span>
                                                        <span className="font-medium">64%</span>
                                                    </div>
                                                    <div className="flex items-center justify-between text-sm">
                                                        <span>Panel Discussions</span>
                                                        <span className="font-medium">28%</span>
                                                    </div>
                                                    <div className="flex items-center justify-between text-sm">
                                                        <span>Keynote Presentations</span>
                                                        <span className="font-medium">8%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                    </Suspense>
                </ErrorBoundary>
            </Tabs>
        </div>
    );
};

export default EventBoostApp;