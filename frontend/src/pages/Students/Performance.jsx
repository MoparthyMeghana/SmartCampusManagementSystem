import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {
    PerformanceContainer,
    Content,
    PerformanceContent,
    PerformanceHeader,
    IndividualPerformance,
    SidebarContainer,
    PerformanceInfo,
    PerformanceGraphContainer,
    TotalMarks
} from '../../styles/PerformanceStyles';

const StudentPerformance = () => {


    //static data
    const performanceData = {
        month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        marks: [90, 85, 87, 92, 85, 90, 67],
        totalMarks: 520
    };

    //lets male line chart data here
    const lineChartData = {
        labels: performanceData.month,
        datasets: [
            {
                label: 'Performance Trends',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#007bff',
                borderColor: '#007bff',
                data: performanceData.marks
            }
        ]
    };


    return(
        <PerformanceContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <Content>
                <PerformanceHeader>Performance</PerformanceHeader>
                <PerformanceInfo>
                    {/* <PerformanceGraphContainer>
                        <Line 
                            data = {lineChartData}
                            options = {{
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                }
                            }}
                        />
                    </PerformanceGraphContainer> */}
                    <TotalMarks>Total Marks: {performanceData.totalMarks}</TotalMarks>
                </PerformanceInfo>
            </Content>
        </PerformanceContainer>
    );
};

export default StudentPerformance;