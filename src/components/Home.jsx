import React from "react";
import "./home.css";
import DestinationCard from "./DestinationCard";

const destinations = [
    { name: "Paris", description: "The city of light and love", image: "https://source.unsplash.com/featured/?paris" },
    { name: "Tokyo", description: "Where tradition meets futurism", image: "https://source.unsplash.com/featured/?tokyo" },
    { name: "New York", description: "The city that never sleeps", image: "https://source.unsplash.com/featured/?newyork" },
];

function Home() {
    return (
        <main className="home">
            <section className="hero">
                <h1>Welcome to GlobusTrip</h1>
                <p>Your gateway to world travel and adventure.</p>
            </section>

            <section id="about" className="about">
                <h2>About Tourism</h2>
                <p>
                    Tourism lets you explore new cultures, taste exotic cuisines, and create
                    lasting memories. Whether you're looking for beaches, mountains, or
                    bustling cities, the world is yours to discover.
                </p>
            </section>

            <section id="destinations" className="destinations">
                <h2>Popular Destinations</h2>
                <div className="destination-list">
                    {destinations.map((dest) => (
                        <DestinationCard key={dest.name} {...dest} />
                    ))}
                </div>
            </section>

            <section id="contact" className="contact">
                <h2>Get in Touch</h2>
                <p>
                    Have questions or need help planning your trip? Reach out to us at{' '}
                    <a href="mailto:info@globustrip.com">info@globustrip.com</a>.
                </p>
            </section>
        </main>
    );
}

export default Home;
