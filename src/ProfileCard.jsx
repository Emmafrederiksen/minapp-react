export default function ProfileCard ({ name, role, email}) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "16px",
                padding: "1.5rem",
                width: "220px",
                backgroundColor: "white",
                boxShadow: "0 8px 20px rgba(0,0,0,0.8)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                color: "#333",
                marginTop: "1rem",
                }}
                
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 14px 30px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
                }}
            >
                <h3 style={{ marginTop: 0, marginBottom: "1rem" }}>{name}</h3>
                <p style={{ margin: "0.3rem 0", color: "#6069bd" }}>{role}</p>
                <p style={{ fontSize: "0.85rem", color: "#666" }}>{email}</p>

        </div>
    );
}