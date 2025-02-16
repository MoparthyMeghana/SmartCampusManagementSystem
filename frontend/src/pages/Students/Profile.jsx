import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {ProfileContainer,
    SidebarContainer,
    Content,
    ProfileHeader,
    ProfileDetails,
    ProfileLabel,
    ProfileInfo,
    EditButton,
    ProfileDetail,
    Label, Value
} from '../../styles/SettingsProfileStyles';

const StudentProfile = () => {

    const studentProfile = {
        name: 'Meghana',
        age: 20,
        year: '4th',
        branch: 'cse',
        email: 'meghana@gmail.com'
    }

    return(
        <ProfileContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <Content>
                <ProfileHeader>Profile</ProfileHeader>
                <ProfileInfo>
                    <ProfileDetail>
                        <Label>Name: </Label>
                        <Value>{studentProfile.name}</Value>
                    </ProfileDetail>
                    <ProfileDetail>
                        <Label>Age: </Label>
                        <Value>{studentProfile.age}</Value>
                    </ProfileDetail>
                    <ProfileDetail>
                        <Label>Year: </Label>
                        <Value>{studentProfile.year}</Value>
                    </ProfileDetail>
                    <ProfileDetail>
                        <Label>Branch: </Label>
                        <Value>{studentProfile.branch}</Value>
                    </ProfileDetail>
                    <ProfileDetail>
                        <Label>E-mail: </Label>
                        <Value>{studentProfile.email}</Value>
                    </ProfileDetail>
                </ProfileInfo>
            </Content>
        </ProfileContainer>
    );
};

export default StudentProfile;