import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {LibraryContainer,
    Content,
    Title,
    AddBookForm,
    FormGroup,
    Label,
    Input,
    Button,
    BookList,
    BookItem, BookTitle, BookAuthor, ActionButton, SidebarContainer,
    LibraryHeader, BorrowButton
} from '../../styles/LibraryStyles';

const StudentLibrary = () => {
    return(
        <LibraryContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <Content>
                <LibraryHeader>Library</LibraryHeader>
                {/*mapping through books coming from database*/}
                <BookList>

                </BookList>
            </Content>
        </LibraryContainer>
    );
};

export default StudentLibrary;