import MenuBar from "./MenuBar.jsx";
import ProfileCard from "./ProfileCard.jsx";
import ClickTracker from "./ClickTracker.jsx";

export default function App() {
    return (
        <>
            {/* Background animation */}
            <style>
                {`
                @keyframes backgroundMove {
                    0% {
                        background-position: 0% 0%;
                    }
                    50% {
                        background-position: 100% 100%;
                    }
                    100% {
                        background-position: 0% 0%;
                    }
                }
                `}
            </style>

            <div 
                style={{
                    minHeight: "100vh",
                    background: `
                        radial-gradient(circle at top left, rgba(143,148,251,0.15), transparent 45%),
                        radial-gradient(circle at bottom right, rgba(96,105,189,0.15), transparent 40%),
                        linear-gradient(180deg, #0f0f14 0%, #141824 100%)
                    `,
                    backgroundSize: "200% 200%",
                    animation: "backgroundMove 30s ease-in-out infinite",
                    padding: "2rem",
                    color: "white",
                }}
            >
                <div 
                    style={{
                        maxWidth: "1800px",
                        margin: "0 auto"
                    }}
                >
                    <MenuBar />

                    <main
                        style={{
                            maxWidth: "900px",
                            margin: "5rem auto 0 auto",
                            display: "grid",
                            gap: "2.5rem",
                            justifyItems: "start",
                        }}
                    >
                        <section>
                            <h2>Brugere i systemet</h2>

                            <div 
                                style={{
                                    display: "flex",
                                    gap: "2rem",
                                    marginTop: "0.5rem",
                                }}
                            >
                                <ProfileCard 
                                    name="Emma" 
                                    role="Junior Developer" 
                                    email="Emma@minapp.dk" 
                                />

                                <ProfileCard 
                                    name="Liam" 
                                    role="Senior Developer" 
                                    email="Liam@minapp.dk" 
                                />
                            </div>
                        </section>

                        <section>
                            <h2 style={{ marginTop: "1rem", padding: "0 0 0.5rem 0" }}>
                                Produkter på lager
                            </h2>
                            <ClickTracker />
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}
