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
    EditButton
} from '../../styles/SettingsProfileStyles';

const SettingsProfile = () => {

            const facultyInfo = {
                name: 'Rakesh',
                email: 'rakesh@gmail.com',
                phone:'987654321',
                address: 'nrt',
                qualification: 'M.Tech'
            };


    return (
        <ProfileContainer>
            <SidebarContainer>
            <Sidebar />
            </SidebarContainer>
            <Content>
                <ProfileHeader>Profile Details</ProfileHeader>
                <ProfileDetails>
                    <ProfileLabel>Name: </ProfileLabel>
                    <ProfileInfo>{facultyInfo.name}</ProfileInfo>

                    <ProfileLabel>Email: </ProfileLabel>
                    <ProfileInfo>{facultyInfo.email}</ProfileInfo>

                    <ProfileLabel>Phone: </ProfileLabel>
                    <ProfileInfo>{facultyInfo.phone}</ProfileInfo>

                    <ProfileLabel>Address: </ProfileLabel>
                    <ProfileInfo>{facultyInfo.address}</ProfileInfo>

                    <ProfileLabel>Qulaification: </ProfileLabel>
                    <ProfileInfo>{facultyInfo.qualification}</ProfileInfo>

                </ProfileDetails>

                <EditButton>Edit Profile</EditButton>
            </Content>
        </ProfileContainer>
    );
};

export default SettingsProfile;