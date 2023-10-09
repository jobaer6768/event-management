

const Banner = () => {
    return (
        <div>
            <div className="hero h-[90vh]" style={{ backgroundImage: 'url(/background.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">
                            We create <br />
                            You <br />
                            Celebrate
                        </h1>
                        <p className="mb-5">Planning a Wedding, Proposal or Event in our busy city is not easy, and it takes skills and time to make it all look easy going</p>
                        <button className="btn btn-secondary">Online Request</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;