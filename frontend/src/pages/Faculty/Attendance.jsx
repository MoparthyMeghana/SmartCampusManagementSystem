import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {AttendanceContainer,
    Content,
    AttendanceContent,
    AttendanceHeader,
    AttendanceList,
    AttendanceItem,
    StudentName,
    CheckboxLabel,
    Divider,
    SubmitButton,
    AttendanceDate,
    AttendanceStatus
} from '../../styles/AttendanceStyles';


const FacultyAttendance = () => {
    return (
        <AttendanceContainer>
            <Sidebar />
            <Content>
                <AttendanceContent>
                    <AttendanceHeader>Attendance</AttendanceHeader>
                    <AttendanceList>
                        <AttendanceItem>
                            <StudentName></StudentName>
                            <CheckboxLabel>
                                <input 
                                    type="checkbox"
                                />
                                Present
                            </CheckboxLabel>
                            <CheckboxLabel>
                                <input 
                                    type="checkbox"
                                />
                                Absent
                            </CheckboxLabel>
                            <CheckboxLabel>
                                <input 
                                    type="checkbox"
                                />
                                Absent with apology
                            </CheckboxLabel>
                        </AttendanceItem>
                    </AttendanceList>
                    <SubmitButton >Submit</SubmitButton>
                </AttendanceContent>
            </Content>
        </AttendanceContainer>
    );
};

export default FacultyAttendance;