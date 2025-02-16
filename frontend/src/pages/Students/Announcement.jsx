import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {AnnouncementContainer,
    Content,
    AnnouncementForm,
    Label,
    AnnouncementList,
    AnnouncementItem,
    AnnouncementContent,
    SidebarContainer,
    AnnouncementTitle,AnnouncementHeader
} from '../../styles/AnnouncementStyles';
const StudentAnnouncement = () => {
    return(
        <AnnouncementContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <Content>
                <AnnouncementHeader>Announcements</AnnouncementHeader>
                {/*mapping announcements from database */}
                <AnnouncementList>

                </AnnouncementList>
            </Content>
        </AnnouncementContainer>
    );
};

export default StudentAnnouncement;