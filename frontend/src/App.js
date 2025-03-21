import React, { useState } from "react";
import Editor from "./components/Editor";

function App() {
    const [docId, setDocId] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    const handleJoin = () => {
        if (docId.trim()) {
            setIsEditing(true);
        }
    };

    return (
        <div className="App">
            <h1>Real-Time Collaborative Editor</h1>
            {!isEditing ? (
                <div>
                    <input
                        type="text"
                        placeholder="Enter Document ID"
                        value={docId}
                        onChange={(e) => setDocId(e.target.value)}
                    />
                    <button onClick={handleJoin}>Join Document</button>
                </div>
            ) : (
                <Editor docId={docId} />
            )}
        </div>
    );
}

export default App;
