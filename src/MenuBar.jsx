import { FiLayers } from "react-icons/fi";  

export default function MenuBar() {
    return (
        <nav style={{
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            padding: "1.5rem 3rem 1.5rem 3rem", 
            margin: 0,
            background: "linear-gradient(135deg, #6069bd, #8f94fb)",
            color: "white", 
            borderRadius: "50px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}>

            <h2
                style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                margin: 0,
                color: "white",
                textShadow: "0 0 4px rgba(255,255,255,0.4)",
                }}
            >
                <FiLayers 
                    size={24} 
                    style={{
                        filter: "drop-shadow(0 0 8px rgba(255,255,255,0.9))",
                    }}
                />
                MinApp
            </h2>

            <ul
                style={{
                display: "flex",
                gap: "1.8rem",
                listStyle: "none",
                margin: 0,
                padding: 0,
                }}
            >
                {["Hjem", "Om mig", "Brugere", "Kontakt"].map((item) => (
                <li
                    key={item}
                    style={{
                    padding: "0.4rem 0.8rem",
                    fontSize: "1.2rem",
                    borderRadius: "20px",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "rgba(255,255,255,0.2)")
                    }
                    onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                    }
                >
                    {item}
                </li>
                ))}

                <button 
                style={{ 
                    padding: "0.5rem 1.4rem",
                    borderRadius: "20px",
                    border: "none",
                    backgroundColor: "rgb(255, 255, 255)",
                    color: "#6069bd",
                    fontSize: "1rem",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                    fontWeight: 500,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                }}
                onMouseEnter={(e) => { 
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                    e.target.style.color = "#6069bd";
                }}
                onMouseLeave={(e) => { 
                    e.target.style.backgroundColor = "rgba(255, 255, 255)"; 
                    e.target.style.color = "#6069bd";
                }}>
                Log ind
            </button>
            </ul>            
        </nav>
    );
}