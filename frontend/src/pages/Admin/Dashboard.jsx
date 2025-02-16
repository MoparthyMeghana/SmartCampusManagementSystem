import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import EventCalendar from "./EventCalendar";
import Announcement from "./Announcement";
import Performance from "./Performance";
import axios from 'axios';
import {
    AdminDashboardContainer,
    Content,
    TopContent,
    BottomContent,
    Section,
    SectionTitle,
    CardContainer,
    Card,
    CardTitle,
    CardContent,
    StudentDashboardContainer,
    FacultyDashboardContainer
} from '../../styles/DashboardStyles';


const AdminDashboard = () => {

    const [isOpen, setIsOpen] = useState(true);
    const [events, setEvents] = useState([]);
    const [announcements, setAnnouncements] = useState([]);
    const [studentPerformance, setStudentPerformance] = useState([]);

    useEffect(() => {
        fetchEvents();
        fetchAnnouncements();
        fetchStudentPerformance();
    }, []);


    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/events/getall');
            setEvents(response.data.events || []);
        }catch(error){
            console.log("Error fetching events: ", error);
        }
    };

    const fetchAnnouncements = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/announcements/getall');
            setAnnouncements(response.data.announcements || []);
        }catch(error){
            console.log("Error fetching announcements: ", error);
        }
    };

    const fetchStudentPerformance = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/performance/getall');
            setStudentPerformance(response.data.performance || []);
        }catch(error){
            console.log("Error fetching student performance: ", error);
        }
    };


    return (
        <AdminDashboardContainer>
            <Content>
                <TopContent>
                    <Section>
                        <SectionTitle>Overview</SectionTitle>
                        <CardContainer>
                            <Card>
                                <CardTitle>Total Students</CardTitle>
                                <CardContent>500</CardContent>
                            </Card>
                            <Card>
                                <CardTitle>Total Faculty</CardTitle>
                                <CardContent>50</CardContent>
                            </Card>
                            <Card>
                                <CardTitle>Total Classes</CardTitle>
                                <CardContent>20</CardContent>
                            </Card>
                        </CardContainer>
                    </Section>
                    <Sidebar />

                    <Section>
                        <SectionTitle>All Events</SectionTitle>
                    </Section>

                    {/* <Section>
                        <EventCalendar events={events}/>
                    </Section> */}
                </TopContent>

                <BottomContent>
                    <Performance studentPerformance = {studentPerformance}/>
                    <Announcement announcements = {announcements}/>
                </BottomContent>
            </Content>
        </AdminDashboardContainer>
    );
};

export default AdminDashboard;