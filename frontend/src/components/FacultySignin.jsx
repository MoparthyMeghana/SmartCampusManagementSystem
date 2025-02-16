import { useState } from 'react';
import { FacultySignInContainer,
    FormContainer,
    InputField,
    SubmitButton
} from '../styles/FacultySignInStyles';
//import { Link } from 'react-router-dom';

const FacultySignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        //lets simply just log the registration data
        console.log('Faculty Sign In', {email, password});
    };
    
    return (
        <FacultySignInContainer>
            <h2>Faculty Sign In</h2>
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
                <SubmitButton to="/faculty/dashboard" onClick={handleSignIn}>Sign In</SubmitButton>
            </FormContainer>
        </FacultySignInContainer>
    );
};

export default FacultySignIn;