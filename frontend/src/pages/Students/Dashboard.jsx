import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
//import EventCalendar from "./EventCalendar";
//import StudentAnnouncement from "./Announcement";
//import Performance from "./Performance";
import axios from 'axios';
import {
    Content,
    TopContent,
    BottomContent,
    Section,
    SectionTitle,
    CardContainer,
    Card,
    CardTitle,
    CardContent,
    StudentDashboardContainer
} from '../../styles/DashboardStyles';



const StudentDashboard = () => {
    return (
        <StudentDashboardContainer>
            <Sidebar />
            <Content>
                    <Section>
                        <SectionTitle>Overview</SectionTitle>
                        <CardContainer>
                            <Card>
                                <CardTitle>Assignments</CardTitle>
                                <CardContent>5</CardContent>
                            </Card>
                            <Card>
                                <CardTitle>Performance</CardTitle>
                                <CardContent>530</CardContent>
                            </Card>
                            <Card>
                                <CardTitle>Term</CardTitle>
                                <CardContent>1</CardContent>
                            </Card>
                        </CardContainer>
                    </Section>
                    {/* <Sidebar /> */}

                    <Section>
                        <SectionTitle>Recent Activity</SectionTitle>
                    </Section>
                    <Section>
                        <SectionTitle>Upcoming Events</SectionTitle>
                    </Section>


                    {/* <Section>
                        <EventCalendar events={events}/>
                    </Section> */}

                {/* <BottomContent>
                    <StudentPerformance />
                    <StudentAnnouncement />
                </BottomContent> */}
            </Content>
        </StudentDashboardContainer>
    );
};

export default StudentDashboard;