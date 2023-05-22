import MovieNightImage from "../assets/images/movie.png";

const HomePage = () => {
  return (
    <section>
      <div className="container">
        {/* image content  */}
        <div className="movie-content">
          <img src={MovieNightImage} alt="movie-img" />
        </div>

        {/* text and button content  */}
        <div className="text-content">
          <h1 >
            Imagine if <span className="snap-text">Snapchat</span> had events.
          </h1>
          <p className="bottom-text">
            Easily host and share events with your friends across any social
            media.
          </p>

          <button>🎉 Create my event</button>
        </div>
      </div>
    </section>
  );
};
export default HomePage;
