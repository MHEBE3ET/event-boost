export const audienceSegments = [
  {
    id: 1,
    title: "Past Event Attendees",
    contacts: 666,
    bgColor: "bg-blue-50",
    tags: ["Tech Leaders", "High Engagement", "Previous Attendees"],
    buttonColor: "bg-blue-600",
    lastEvent: "Tech Summit 2023",
    registrationRate: 78,
    location: {
      NA: 45,
      EU: 30,
      APAC: 25
    },
    industries: {
      Technology: 65,
      Finance: 20,
      Healthcare: 15
    }
  },
  {
    id: 2,
    title: "LinkedIn Tech Groups",
    contacts: 3890,
    bgColor: "bg-purple-50",
    tags: ["Software Engineers", "Active Discussion", "Tech Community"],
    buttonColor: "bg-purple-600",
    engagement: {
      posts: 245,
      comments: 1890,
      shares: 567
    },
    topGroups: [
      "Cloud Architecture Pros",
      "AI/ML Engineers",
      "DevOps Masters"
    ]
  },
  {
    id: 3,
    title: "Similar Event Attendees",
    contacts: 2567,
    bgColor: "bg-green-50",
    tags: ["Event Goers", "Tech Interest", "Industry Match"],
    buttonColor: "bg-green-600",
    matchScore: 85,
    recentEvents: [
      "Cloud Summit 2024",
      "DevOps World 2023",
      "AI Conference 2024"
    ]
  }
];

// Simulate API call with delay
export const fetchAudienceSegments = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(audienceSegments);
    }, 500); // 500ms delay to simulate network request
  });
};