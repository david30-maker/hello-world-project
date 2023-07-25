import React, {useEffect, useState} from "react";

const App = () => {
    const [greeting, setGreeting] = useState("")
    
    useEffect(() => {
        fetch("/api/random_greeting")
        .then(response => response.json())
        .then(data => setGreeting(data.message))
        .catch((error)=> console.error('Error fetching greeting: ', error));
    }, []);
    
    return (
        <div>
        <h1>{greeting}</h1>
        </div>
    );
    };

export default App;