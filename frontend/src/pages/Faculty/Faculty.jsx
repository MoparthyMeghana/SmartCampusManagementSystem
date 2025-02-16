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


const FacultySection = () => {
    return (
        <FacultyContainer>
            <Sidebar />
            <Content>
                <FacultyContent>
                    <FacultyHeader>Faculty</FacultyHeader>
                    <FacultyList>
                        {/*mapping faculty later from database */}
                    </FacultyList>
                </FacultyContent>
            </Content>
        </FacultyContainer>
    );
};

export default FacultySection;