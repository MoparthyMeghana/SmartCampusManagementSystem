import { useState } from 'react';
import { StudentSignInContainer,
    FormContainer,
    InputField,
    SubmitButton
} from '../styles/StudentSignInStyles';
//import { Link } from 'react-router-dom';

const StudentSignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        //lets simply just log the registration data
        console.log('Student Sign In', {email, password});
    };
    
    return (
        <StudentSignInContainer>
            <h2>Student Sign In</h2>
            <FormContainer>
                <InputField 
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <InputField 
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <SubmitButton to="/student/dashboard" onClick={handleSignIn}>Sign In</SubmitButton>
            </FormContainer>
        </StudentSignInContainer>
    );
};

export default StudentSignIn;