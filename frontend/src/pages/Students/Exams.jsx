import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {Bar} from 'react-chartjs-2';
import {ExamContainer,
    SidebarContainer,
    Content,
    ExamHeader,
    ExamForm,
    FormLabel,
    FormInput,
    AddButton,
    ExamResultsContainer,
    ExamSubject,
    ExamResult,
    ExamChartContainer
} from '../../styles/ExamStyles';

const Exams = () => {

    //sample exam results
    const examResultData = {
        subjects: ['Math', 'Data Structures', 'English','Python','Java'],
        results: [80, 75, 85, 80, 90]
    };

    const barChartData ={
        labels: examResultData.subjects, 
        datasets: [
        {
            labels: 'Exam Results',
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            borderWidth: '1',
            hoverBackgroundColor: '#0056b3',
            hoverBorderColor: '#0056b3',
            data: examResultData.results
        }
        ]
    };

    const chartOptions = {
        scales: {
            y: {
                type: 'linear',
                beginAtZero: true,
                max: 100
            }
        }
    };
    return(
        <ExamContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <Content>
                <ExamHeader>Exam Results</ExamHeader>
                <ExamResultsContainer>
                    {examResultData.subjects.map((subjects, index) => {
                        <div key={index}>
                            <ExamSubject>{subjects}</ExamSubject>
                            <ExamResult>Score: {examResultData.results[index]}</ExamResult>
                        </div>
                    })}
                    {/* <ExamChartContainer>
                        <Bar 
                            ref={chartRef}
                            data = {barChartData}
                            options={chartOptions}
                        />
                    </ExamChartContainer> */}
                </ExamResultsContainer>
            </Content>
        </ExamContainer>
    );
};

export default Exams;