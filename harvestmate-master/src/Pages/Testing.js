import React, { useState, useEffect } from 'react';

function Testing() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/api/data')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Fetched data:', data); // Debug log
                setData(data);
            })
            .catch((error) => {
                console.error('Fetch error:', error); // Debug log
                setError(error.message);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid black' }}>
            <h1>New Page</h1>
            {data.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{item.harvest || item.description || item.exit}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Testing;
