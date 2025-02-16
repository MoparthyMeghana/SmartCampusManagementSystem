import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {AnnouncementContainer,
    Content,
    Title,
    AnnouncementForm,
    FormGroup,
    Label,
    TextArea,
    Button,
    AnnouncementList,
    AnnouncementItem,
    AnnouncementContent,
    SidebarContainer,
    AnnouncementHeader,
    AnnouncementTitle
} from '../../styles/AnnouncementStyles';


const FacultyAnnouncement = () => {
    return (
        <AnnouncementContainer>
            <Sidebar />
            <Content>
                <AnnouncementContent>
                    <Title>Announcement</Title>
                    <AnnouncementForm>
                        <FormGroup>
                            <Label htmlFor="announcement">Announcement: </Label>
                            <TextArea 
                                id="announcement"
                                required
                                rows={4}
                                cols={50}
                            />
                        </FormGroup>
                        <Button type="submit">Send Announcement</Button>
                    </AnnouncementForm>

                    {/* To display announcements */}
                    <h2>Announcement</h2>
                    <AnnouncementList></AnnouncementList>
                </AnnouncementContent>
            </Content>
        </AnnouncementContainer>
    );
};

export default FacultyAnnouncement;