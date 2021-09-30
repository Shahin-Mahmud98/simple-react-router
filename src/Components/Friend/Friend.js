import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    // const { name, phone, website, address, email } = props.friend;
    const { id, name, phone, website, address, email, } = props.friend;
    const history = useHistory();
    const friendStyle = {
        border: "2px solid goldenrod",
        padding: "10px",
        borderRadius: "10px",
        shadow: "10px",
        margin: "10px"
    };
    const url = `/friend/${id}`;

    const handleFriendClick = () => {
        history.push(`/friend/${id}`);
    }
    return (
        <div style={friendStyle}>
            <h1>I have a new friends</h1>
            <h2>I am :{name} {id} </h2>
            <h3>Call me :{phone}</h3>
            <h4>Website :{website}</h4>
            <h5>Address :{address.city}</h5>
            <h6>Email :{email}</h6>
            <Link to={url}>Visit Me</Link>
            <br />
            <Link to={url}>
                <button>visit Me</button>
            </Link>
            <br />

            <button onClick={handleFriendClick}>Visit Me 2</button>
        </div>
    );
};

export default Friend;