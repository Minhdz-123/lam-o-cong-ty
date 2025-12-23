// ========== DATA ARRAYS ==========

// Navigation data
export const navData = {
    logo: {
        text: "Graph Page",
        bars: [20, 30, 25, 35] // heights in pixels
    },
    links: [
        {
            text: "Home",
            active: true
        },
        {
            text: "Dashboard",
            active: false
        },
        {
            text: "Analytics",
            active: false
        },
        {
            text: "Reports",
            active: false
        },
        {
            text: "Contact",
            active: false
        }
    ],
    hasSearch: true
};

// Hero section data
export const heroData = {
    title: {
        part1: "Data Analytics",
        part2: "Dashboard"
    },
    description: "Transform your data into actionable insights with our cutting-edge analytics platform. Real-time monitoring, intelligent predictions, and beautiful visualizations.",
    button: {
        text: "Get Started"
    },
    charts: [
        { height: 120 },
        { height: 180 },
        { height: 150 },
        { height: 200 },
        { height: 140 },
        { height: 170 }
    ]
};

// Dashboard KPI cards data
export const dashboardCards = [
    {
        icon: {
            type: "fa",
            class: "fa-solid fa-chart-simple"
        },
        title: "Total Revenue",
        value: "$42,847",
        description: "Monthly revenue increased by 23% compared to last month with strong performance across all channels.",
        graphColor: "#00d4ff",
        graphData: [20, 35, 25, 45, 30, 50, 40, 55]
    },
    {
        icon: {
            type: "fa",
            class: "fa-solid fa-user-group"
        },
        title: "Active Users",
        value: "18.5K",
        description: "Real-time analytics showing active users currently engaging with the platform.",
        graphColor: "#ff00ff",
        graphData: [30, 35, 32, 38, 35, 40, 38, 42]
    },
    {
        icon: {
            type: "fa",
            class: "fa-solid fa-bullseye"
        },
        title: "Conversion Rate",
        value: "94.3%",
        description: "Customer satisfaction rate based on recent surveys and feedback analysis.",
        graphColor: "#00a8ff",
        graphData: [85, 88, 87, 90, 89, 92, 91, 94]
    },
    {
        icon: {
            type: "fa",
            class: "fa-solid fa-rocket"
        },
        title: "Performance Score",
        value: "7,392",
        description: "Overall system performance metrics showing optimal operation across all services.",
        graphColor: "#ffd700",
        graphData: [60, 65, 62, 68, 64, 70, 67, 72]
    },
    {
        icon: {
            type: "fa",
            class: "fa-solid fa-sack-dollar"
        },
        title: "Monthly Growth",
        value: "+28.5%",
        description: "Consistent month-over-month growth in user acquisition and revenue generation.",
        graphColor: "#ff4444",
        graphData: [15, 18, 20, 22, 24, 26, 27, 28]
    },
    {
        icon: {
            type: "fa",
            class: "fa-solid fa-bolt-lightning"
        },
        title: "System Uptime",
        value: "99.9%",
        description: "Exceptional reliability with minimal downtime ensuring seamless user experience.",
        graphColor: "#00ffaa",
        graphData: [95, 96, 97, 98, 98, 99, 99, 99]
    }
];

export const advancedAnalyticsCards = [
    {
        title: "Advanced Analytics",
        AnaCards: [
            {
                value: "2.4M",
                description: "Page Views"
            },
            {
                value: "156K",
                description: "Unique Visitors"
            },
            {
                value: "4.2min",
                description: "Avg Session"
            },
            {
                value: "68%",
                description: "Return Rate"
            },
            {
                value: "89",
                description: "NPS Score"
            },
            {
                value: "3.2K",
                description: "Daily Active"
            }
        ],
        AnaTable: [
            {
                icon: {
                    type: "fa",
                    class: "fa-solid fa-chart-line"
                },
                title: "Monthly Trends",
                button: [
                    {
                        name: '2024',
                        graphColor: '#00a8ff',
                        graphData: [
                            {
                                name: "Jan",
                                value: 120
                            },
                            {
                                name: "Feb",
                                value: 180
                            },
                            {
                                name: "Mar",
                                value: 90
                            },
                            {
                                name: "Apr",
                                value: 140
                            },
                            {
                                name: "May",
                                value: 200
                            },
                            {
                                name: "Jun",
                                value: 130
                            },
                            {
                                name: "Jul",
                                value: 150
                            },
                            {
                                name: "Aug",
                                value: 170
                            }


                        ]

                    },
                    {
                        name: '2023', graphColor: '#00a8ff',
                        graphData: [
                            {
                                name: "Jan",
                                value: 120
                            },
                            {
                                name: "Feb",
                                value: 180
                            },
                            {
                                name: "Mar",
                                value: 90
                            },
                            {
                                name: "Apr",
                                value: 140
                            },
                            {
                                name: "May",
                                value: 200
                            },
                            {
                                name: "Jun",
                                value: 130
                            },
                            {
                                name: "Jul",
                                value: 150
                            },
                            {
                                name: "Aug",
                                value: 170
                            }]
                    },
                    {
                        name: '2022',
                        graphColor: '#00a8ff',
                        graphData: [
                            {
                                name: "Jan",
                                value: 120
                            },
                            {
                                name: "Feb",
                                value: 180
                            },
                            {
                                name: "Mar",
                                value: 90
                            },
                            {
                                name: "Apr",
                                value: 140
                            },
                            {
                                name: "May",
                                value: 200
                            },
                            {
                                name: "Jun",
                                value: 130
                            },
                            {
                                name: "Jul",
                                value: 150
                            },
                            {
                                name: "Aug",
                                value: 170
                            }]
                    }
                ],


            },
            {
                icon: {
                    type: "fa",
                    class: "fa-solid fa-chart-line"
                },
                title: "Monthly Trends",
                button: [
                    {
                        name: '2024',
                        graphColor: '#00a8ff',
                        graphData: [
                            {
                                name: "Jan",
                                value: 120
                            },
                            {
                                name: "Feb",
                                value: 180
                            },
                            {
                                name: "Mar",
                                value: 90
                            },
                            {
                                name: "Apr",
                                value: 140
                            },
                            {
                                name: "May",
                                value: 200
                            },
                            {
                                name: "Jun",
                                value: 130
                            },
                            {
                                name: "Jul",
                                value: 150
                            },
                            {
                                name: "Aug",
                                value: 170
                            }


                        ]

                    },
                    {
                        name: '2023', graphColor: '#00a8ff',
                        graphData: [
                            {
                                name: "Jan",
                                value: 120
                            },
                            {
                                name: "Feb",
                                value: 180
                            },
                            {
                                name: "Mar",
                                value: 90
                            },
                            {
                                name: "Apr",
                                value: 140
                            },
                            {
                                name: "May",
                                value: 200
                            },
                            {
                                name: "Jun",
                                value: 130
                            },
                            {
                                name: "Jul",
                                value: 150
                            },
                            {
                                name: "Aug",
                                value: 170
                            }]
                    },
                    {
                        name: '2022',
                        graphColor: '#00a8ff',
                        graphData: [
                            {
                                name: "Jan",
                                value: 120
                            },
                            {
                                name: "Feb",
                                value: 180
                            },
                            {
                                name: "Mar",
                                value: 90
                            },
                            {
                                name: "Apr",
                                value: 140
                            },
                            {
                                name: "May",
                                value: 200
                            },
                            {
                                name: "Jun",
                                value: 130
                            },
                            {
                                name: "Jul",
                                value: 150
                            },
                            {
                                name: "Aug",
                                value: 170
                            }]
                    }
                ],


            },
            {
                icon: {
                    type: "fa",
                    class: "fa-solid fa-chart-simple"
                },
                title: "Growth Analytics",
                button: [
                    {
                        name: 'Week',
                        graphColor: '#00a8ff',
                        graphData: [
                            {
                                name: "Jan",
                                value: 120
                            },
                            {
                                name: "Feb",
                                value: 180
                            },
                            {
                                name: "Mar",
                                value: 90
                            },
                            {
                                name: "Apr",
                                value: 140
                            },
                            {
                                name: "May",
                                value: 200
                            },
                            {
                                name: "Jun",
                                value: 130
                            },
                            {
                                name: "Jul",
                                value: 150
                            },
                            {
                                name: "Aug",
                                value: 170
                            }


                        ]

                    },
                    {
                        name: 'Month', graphColor: '#00a8ff',
                        graphData: [
                            {
                                name: "Jan",
                                value: 120
                            },
                            {
                                name: "Feb",
                                value: 180
                            },
                            {
                                name: "Mar",
                                value: 90
                            },
                            {
                                name: "Apr",
                                value: 140
                            },
                            {
                                name: "May",
                                value: 200
                            },
                            {
                                name: "Jun",
                                value: 130
                            },
                            {
                                name: "Jul",
                                value: 150
                            },
                            {
                                name: "Aug",
                                value: 170
                            }]
                    },
                    {
                        name: 'Year',
                        graphColor: '#00a8ff',
                        graphData: [
                            {
                                name: "Jan",
                                value: 120
                            },
                            {
                                name: "Feb",
                                value: 180
                            },
                            {
                                name: "Mar",
                                value: 90
                            },
                            {
                                name: "Apr",
                                value: 140
                            },
                            {
                                name: "May",
                                value: 200
                            },
                            {
                                name: "Jun",
                                value: 130
                            },
                            {
                                name: "Jul",
                                value: 150
                            },
                            {
                                name: "Aug",
                                value: 170
                            }]
                    }
                ],


            },
            {
                icon: {
                    type: "fa",
                    class: "fa-solid fa-chart-line"
                },
                title: "Monthly Trends",
                button: [
                    {
                        name: '2024',
                        graphColor: '#00a8ff',
                        graphData: [
                            {
                                name: "Jan",
                                value: 120
                            },
                            {
                                name: "Feb",
                                value: 180
                            },
                            {
                                name: "Mar",
                                value: 90
                            },
                            {
                                name: "Apr",
                                value: 140
                            },
                            {
                                name: "May",
                                value: 200
                            },
                            {
                                name: "Jun",
                                value: 130
                            },
                            {
                                name: "Jul",
                                value: 150
                            },
                            {
                                name: "Aug",
                                value: 170
                            }


                        ]

                    },
                    {
                        name: '2023', graphColor: '#00a8ff',
                        graphData: [
                            {
                                name: "Jan",
                                value: 120
                            },
                            {
                                name: "Feb",
                                value: 180
                            },
                            {
                                name: "Mar",
                                value: 90
                            },
                            {
                                name: "Apr",
                                value: 140
                            },
                            {
                                name: "May",
                                value: 200
                            },
                            {
                                name: "Jun",
                                value: 130
                            },
                            {
                                name: "Jul",
                                value: 150
                            },
                            {
                                name: "Aug",
                                value: 170
                            }]
                    },
                    {
                        name: '2022',
                        graphColor: '#00a8ff',
                        graphData: [
                            {
                                name: "Jan",
                                value: 120
                            },
                            {
                                name: "Feb",
                                value: 180
                            },
                            {
                                name: "Mar",
                                value: 90
                            },
                            {
                                name: "Apr",
                                value: 140
                            },
                            {
                                name: "May",
                                value: 200
                            },
                            {
                                name: "Jun",
                                value: 130
                            },
                            {
                                name: "Jul",
                                value: 150
                            },
                            {
                                name: "Aug",
                                value: 170
                            }]
                    }
                ],


            },
            {
                icon: {
                    type: "fa",
                    class: "fa-solid fa-chart-line"
                },
                title: "Monthly Trends",
                button: [
                    {
                        name: '2024',
                        graphColor: '#00a8ff',
                        graphData: [
                            {
                                name: "Jan",
                                value: 120
                            },
                            {
                                name: "Feb",
                                value: 180
                            },
                            {
                                name: "Mar",
                                value: 90
                            },
                            {
                                name: "Apr",
                                value: 140
                            },
                            {
                                name: "May",
                                value: 200
                            },
                            {
                                name: "Jun",
                                value: 130
                            },
                            {
                                name: "Jul",
                                value: 150
                            },
                            {
                                name: "Aug",
                                value: 170
                            }


                        ]

                    },
                    {
                        name: '2023', graphColor: '#00a8ff',
                        graphData: [
                            {
                                name: "Jan",
                                value: 120
                            },
                            {
                                name: "Feb",
                                value: 180
                            },
                            {
                                name: "Mar",
                                value: 90
                            },
                            {
                                name: "Apr",
                                value: 140
                            },
                            {
                                name: "May",
                                value: 200
                            },
                            {
                                name: "Jun",
                                value: 130
                            },
                            {
                                name: "Jul",
                                value: 150
                            },
                            {
                                name: "Aug",
                                value: 170
                            }]
                    },
                    {
                        name: '2022',
                        graphColor: '#00a8ff',
                        graphData: [
                            {
                                name: "Jan",
                                value: 120
                            },
                            {
                                name: "Feb",
                                value: 180
                            },
                            {
                                name: "Mar",
                                value: 90
                            },
                            {
                                name: "Apr",
                                value: 140
                            },
                            {
                                name: "May",
                                value: 200
                            },
                            {
                                name: "Jun",
                                value: 130
                            },
                            {
                                name: "Jul",
                                value: 150
                            },
                            {
                                name: "Aug",
                                value: 170
                            }]
                    }
                ],


            },
        ]
    }
]

//Table Analytics data
export const tableAnalyticsCards = [

]