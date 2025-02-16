import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import {ClassContainer,
    Content, ClassesContent, ClassesHeader, ClassList,
    ClassItem, AddClassForm, AddClassInput, AddClassButton,
    ClassesContainer,
    SidebarContainer, ClassHeader, GradeHeader
} from '../../styles/ClassesStyles';

const FacultyClasses = () => {
    return(
        <ClassesContainer>
            <Sidebar />
            <Content>
                <ClassesContent>
                    <ClassesHeader>Classes</ClassesHeader>
                    <ClassList>
                        {/*Mapping classes from database later */}
                    </ClassList>
                    {/* <AddClassForm >
                        <AddClassInput 
                            type="text"
                            placeholder="Enter class name"
                            // value={newClassName}
                            // onChange={(e) => setNewClassName(e.target.value)}
                        />
                        <AddClassButton type="submit">Add Class</AddClassButton>
                    </AddClassForm>
                        {/* <ClassList>
                            {/* Ensure that classes is an array before mapping over it 
                            {Array.isArray(classes) && classes.map((ClassItem, index) => (
                                <ClassItem key={index}>{ClassItem.grade}</ClassItem>
                            ) )}
                        </ClassList> */} 
                </ClassesContent>
            </Content>
        </ClassesContainer>
    );
};

export default FacultyClasses;