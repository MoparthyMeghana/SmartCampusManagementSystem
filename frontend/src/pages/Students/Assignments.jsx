import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
//import EventCalendar from "./EventCalendar";
//import StudentAnnouncement from "./Announcement";
//import Performance from "./Performance";
import axios from 'axios';
import {
    AssignmentsContainer,
    Content,
    AssignmentsContent,
    AssignmentsHeader,
    AssignmentList,
    AssignmentItem,
    AddAssignmentForm,
    AddAssignmentInput,
    AddAssignmentTextArea,
    AddAssignmentButton,
    SidebarContainer,
    AssignmentCard,
    AssignmentTitle,
    AssignmentDescription,
    AssignmentButton,
    AssignmentDoneMessage
} from '../../styles/AssignmentsStyles';



const StudentAssignments= () => {
    return (
        <AssignmentsContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <Content>
                <h1>Assignments</h1>
            </Content>
        </AssignmentsContainer>
    );
};

export default StudentAssignments;