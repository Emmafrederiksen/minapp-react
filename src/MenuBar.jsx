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

            <h2 style={{ margin: 0, fontWeight: 600, letterSpacing: "0.5px" }}>
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
            </ul>
        </nav>
    );
}