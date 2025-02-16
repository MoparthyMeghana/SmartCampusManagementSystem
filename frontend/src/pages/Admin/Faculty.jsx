import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {FacultyContainer,
    Content,
    FacultyContent,
    FacultyHeader,
    FacultyList,
    FacultyItem,
    AddFacultyForm,
    AddFacultyInput,
    AddFacultyButton
} from '../../styles/FacultyStyles';


const Faculty = () => {
    return (
        <FacultyContainer>
            <Sidebar />
            <Content>
                <FacultyContent>
                    <FacultyHeader>Faculty</FacultyHeader>
                    <AddFacultyForm>
                        <AddFacultyInput 
                            type="text"
                            placeholder="Enter Faculty name"
                        />
                        <AddFacultyInput 
                            type="email"
                            placeholder="Enter Faculty email"
                        />
                        <AddFacultyInput 
                            type="text"
                            placeholder="Enter Faculty subject"
                        />
                        <AddFacultyButton type="submit">Add Faculty</AddFacultyButton>
                    </AddFacultyForm>

                    <FacultyList>
                        
                    </FacultyList>
                </FacultyContent>
            </Content>
        </FacultyContainer>
    );
};

export default Faculty;