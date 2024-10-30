import React from 'react';


export interface UserInfoProps {
    name: string;
    age: number;
    email: string;
}


const UserInfo: React.FC<UserInfoProps> = ({ name, age, email }) => {
    return (
        <div>
            <h2>User Information</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Email:</strong> {email}</p>
        </div>
    );
};

export default UserInfo;