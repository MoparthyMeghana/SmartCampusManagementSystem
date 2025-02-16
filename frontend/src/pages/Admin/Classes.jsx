import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {
    ClassesContainer,
    Content,
    ClassesContent,
    ClassesHeader,
    ClassList,
    ClassItem,
    AddClassForm,
    AddClassInput,
    AddClassButton
} from '../../styles/ClassesStyles';

const Classes = () => {
    // const [newClassName, setNewClassName] = useState('');
    // const [classes, setClasses] = useState([]);
    return (
        <ClassesContainer>
            <Sidebar />
            <Content>
                <ClassesContent>
                    <ClassesHeader>Classes</ClassesHeader>
                    <AddClassForm >
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

export default Classes;