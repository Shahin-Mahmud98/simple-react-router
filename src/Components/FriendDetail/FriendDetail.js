import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const history = useHistory();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, []);
    const handleClick = () => {
        history.push('/friends');
        return (
            <div>
                <h1>Friend Detail Coming Soon :{friendId}</h1>
                <h2>{friend.name}</h2>
                <p>{friend.phone}</p>
                <p>{friend.website}</p>
                <p>works at :{friend.company?.name}</p>
                <button onClick={handleClick}>See All friends</button>
            </div>
        );
    };

    export default FriendDetail;