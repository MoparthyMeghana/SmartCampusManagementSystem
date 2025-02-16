import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {StudentsContainer,
    Content,
    StudentsContent,
    StudentsHeader,
    StudentList,
    StudentItem,
    AddStudentForm,
    AddStudentInput,
    AddStudentButton
} from '../../styles/StudentsStyles';

const StudentSection = () => {
    return (
        <StudentsContainer>
            <Sidebar />
            <Content>
                <StudentsContent>
                    <StudentsHeader>Students</StudentsHeader>
                    <StudentList>
                        {/*mapping students from database later */}
                    </StudentList>
                    {/* <AddStudentForm>
                        <AddStudentInput 
                            type="text"
                            placeholder="Enter Student Name"
                        />
                        <AddStudentInput 
                            type="text"
                            placeholder="Enter Registration Number"
                        />
                        <AddStudentInput 
                            type="text"
                            placeholder="Enter Grade"
                        />
                        <AddStudentButton type="submit">Add Student</AddStudentButton>
                    </AddStudentForm> */}
                </StudentsContent>
            </Content>
        </StudentsContainer>
    );
};

export default StudentSection;