import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {AttendanceContainer,
    Content,
    AttendanceHeader,
    AttendanceList,
    AttendanceItem,
    SidebarContainer,
    AttendanceDate,
    AttendanceStatus
} from '../../styles/AttendanceStyles';

const StudentAttendance = () => {

    const attendace = [
        { id: 1, date: '2025-01-20', present: true},
        { id: 2, date: '2025-01-20', present: false},
        { id: 3, date: '2025-01-20', present: true},
        { id: 4, date: '2025-01-20', present: false},
        { id: 5, date: '2025-01-20', present: true}
    ];

    return(
        <AttendanceContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <Content>
                <AttendanceHeader>Attendance</AttendanceHeader>
                <AttendanceList>
                    {attendace.map(({ id, date, present}) => (
                        <AttendanceItem key={id}>
                            <AttendanceDate>{date}</AttendanceDate>
                            <AttendanceStatus present={present}>{present ? 'Present' : 'Absent'}</AttendanceStatus>
                        </AttendanceItem>
                    ) )}
                </AttendanceList>
            </Content>
        </AttendanceContainer>
    );
};

export default StudentAttendance;