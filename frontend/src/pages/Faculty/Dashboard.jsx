import React, {useState, useEffect} from "react";
import Sidebar from "../Faculty/Sidebar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
    AdminDashboardContainer,
    Content, TopContent, BottomContent, Section,
    SectionTitle, CardContainer, Card,
    CardContent, CardTitle,
    FacultyDashboardContainer
} from '../../styles/DashboardStyles';


const FacultyDashboard = () => {
    return (
        <FacultyDashboardContainer>
            <Sidebar />
            <Content>
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
                <Section>
                    <SectionTitle>Recent Activity</SectionTitle>
                </Section>
                <Section>
                    <SectionTitle>Upcoming Events</SectionTitle>
                </Section>
            </Content>
        </FacultyDashboardContainer>
    );
};

export default FacultyDashboard;