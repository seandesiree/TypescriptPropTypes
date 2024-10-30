
import React from 'react';
import UserInfo from './UserInfo'; 

const App: React.FC = () => {
    const user = {
        name: 'John Doe',
        age: 30,
        email: 'johndoe@example.com',
    };

    return (
        <div>
            <h1>Welcome to User Information App</h1>
            <UserInfo name={user.name} age={user.age} email={user.email} />
        </div>
    );
};

export default App;