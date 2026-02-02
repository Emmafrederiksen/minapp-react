import MenuBar from "./MenuBar.jsx";
import ProfileCard from "./ProfileCard.jsx";
import ClickTracker from "./ClickTracker.jsx";

export default function App() {
    return (
        <div 
            style={{
                minHeight: "100vh",
                backgroundColor: "#181818",
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

                            <hr></hr>

                            <ProfileCard 
                                name="Liam" 
                                role="Senior Developer" 
                                email="Liam@minapp.dk" 
                            />
                        </div>
                    </section>
                    
                    <section>
                        <h2 style={{ marginTop: "1rem", padding: "0 0 0.5rem 0" }}>Produkter på lager</h2>
                        <ClickTracker />
                    </section>        
                </main>
            </div>
        </div>
    );
}