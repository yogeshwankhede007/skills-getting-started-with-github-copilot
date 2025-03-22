import React from 'react';
import ActivityCard from './components/ActivityCard';

function App() {
    const activities = [
        {
            title: 'Team Meeting',
            description: 'Discuss project updates.',
            participants: [
                { name: 'Alice' },
                { name: 'Bob' },
                { name: 'Charlie' },
            ],
        },
        // ...existing activities...
    ];

    return (
        <div className="app">
            {activities.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
            ))}
        </div>
    );
}

export default App;
