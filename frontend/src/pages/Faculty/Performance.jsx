import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {PerformanceContainer,
    Content,
    PerformanceContent,
    PerformanceHeader,
    CollegePerformance,
    IndividualPerformance,
    // PerformanceInfo,
    // PerformanceGraphContainer,
    // TotalMarks
} from '../../styles/PerformanceStyles';




const FacultyPerformance = () => {

const collegePerformanceData = {
    averageScore: 85,
    totalStudents: 100,
};

const individualStudentPerformanceData = [
    { id: 1, name: 'Gayi', score: 90},
    { id: 2, name: 'Meghana', score: 90},
    { id: 3, name: 'Sowda', score: 90},
    { id: 4, name: 'lalli', score: 90},
    { id: 5, name: 'sam', score: 90},
];

    return (
        <PerformanceContainer>
            <Sidebar />
            <Content>
                <PerformanceContent>
                    <PerformanceHeader>College Performance</PerformanceHeader>
                    <CollegePerformance>
                        <p>Average Score: {collegePerformanceData.averageScore}</p>
                        <p>Total Students: {collegePerformanceData.totalStudents}</p>
                    </CollegePerformance>
                    <PerformanceHeader>Individual Performance</PerformanceHeader>
                    <IndividualPerformance>
                        {individualStudentPerformanceData.map(student =>(
                            <p key={student.id}>
                                {student.name}: {student.score}
                            </p>
                        ))}
                    </IndividualPerformance>
                </PerformanceContent>
            </Content>
        </PerformanceContainer>
    );
};

export default FacultyPerformance;