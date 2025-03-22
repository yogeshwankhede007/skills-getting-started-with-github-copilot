import React from 'react';

function ActivityCard({ activity }) {
    // ...existing code...
    return (
        <div className="activity-card">
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
            {/* Add participant info */}
            <div className="participants">
                <h4>Participants:</h4>
                <ul>
                    {activity.participants.map((participant, index) => (
                        <li key={index}>{participant.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ActivityCard;
