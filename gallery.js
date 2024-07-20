import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch('https://course-api.com/react-tours-project');
                const data = await response.json();
                setTours(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchTours();
    }, []);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };

    const toggleReadMore = (id) => {
        const updatedTours = tours.map((tour) => {
            if (tour.id === id) {
                tour.showMore = !tour.showMore;
            }
            return tour;
        });
        setTours(updatedTours);
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error fetching data</div>;
    }

    return (
        <div className="gallery">
            {tours.map((tour) => (
                <div key={tour.id} className="tour-card">
                    <img src={tour.image} alt={tour.name} />
                    <h2>{tour.name}</h2>
                    <p>
                        {tour.showMore ? tour.info : `${tour.info.substring(0, 200)}...`}
                        <button onClick={() => toggleReadMore(tour.id)}>
                            {tour.showMore ? 'Show Less' : 'Read More'}
                        </button>
                    </p>
                    <button className="not-interested" onClick={() => removeTour(tour.id)}>
                        Not Interested
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
