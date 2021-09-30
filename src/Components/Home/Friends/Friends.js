import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Friend from '../../Friend/Friend';
import './Friends.css';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);

}
return (
    <div>
        <h1>I have friends :{friends.length}</h1>
        <div className="friends-container">

            {
                friends.map(friend => <Friend key={friend.id} friend={friend} ></Friend>)
            }
        </div>
    </div>
);
};

export default Friends;