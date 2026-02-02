import { useState } from "react";

export default function ClickTracker() {
    const [count, setCount] = useState(0);

    return (
        <div 
            style={{ 
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.8)",
                textAlign: "center",
                marginTop: "1rem",
                width: "220px",
            }}>

            <button onClick={() => setCount(count +1)}
                style={{
                    padding: "0.8rem 1.6rem",
                    borderRadius: "30px",
                    border: "none",
                    backgroundColor: "#6069bd",
                    color: "white",
                    fontSize: "1rem",
                    cursor: "pointer",
                    
                    }}
                >   
                Klik på mig!
            </button>

            <p style={{ marginTop: "1rem", fontSize: "1.2rem", color: "#333" }}>Antal klik: {count}</p>

            {count === 10 && (
                <p style={{ color: "#38a169", fontWeight: 500 }}>
                    Du har klikket 10 gange!
                </p>
            )}
        </div>
    );

}