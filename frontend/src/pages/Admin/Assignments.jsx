import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {AssignmentsContainer,
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


const Assignments = () => {
    return (
        <AssignmentsContainer>
            <Sidebar />
            <Content>
                <AssignmentsContent>
                    <AssignmentsHeader>Assignments</AssignmentsHeader>
                    <AddAssignmentForm>
                        <AddAssignmentInput 
                            type="text"
                            placeholder="Enter assignment title"
                        />
                        <AddAssignmentTextArea 
                            placeholder="Enter assignment description"
                        />
                        <AddAssignmentInput 
                            type="text"
                            placeholder="Enter assignment grade"
                        />
                        <AddAssignmentInput 
                            type="text"
                            placeholder="Enter Assignment deadline"
                        />
                        <AddAssignmentButton type="submit">Add Assignment</AddAssignmentButton>
                    </AddAssignmentForm>
                </AssignmentsContent>
            </Content>
        </AssignmentsContainer>
    );
};

export default Assignments;