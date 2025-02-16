import { ChooseUserContainer, 
    UserSection, 
    Title, 
    Button
} from '../styles/ChooseUserStyles';
import { Link } from 'react-router-dom';

const ChooseUser = () => {
    return (
        <ChooseUserContainer>
            <UserSection>
                <Title>Admin</Title>
                <Button to="admin-signIn">Login as Admin</Button>
            </UserSection>
            <UserSection>
                <Title>Faculty</Title>
                <Button to="faculty-signIn">Login as faculty</Button>
            </UserSection>
            <UserSection>
                <Title>Student</Title>
                <Button to="student-signIn">Login as Student</Button>
            </UserSection>
        </ChooseUserContainer>
    );
};

export default ChooseUser; 