function Movie(props) {
    const {
        Title: title, //переименуем на маленькую букву для красоты, можно не переименовывать
        Type: type,
        Year: year,
        imdbID: id,
        Poster: poster,
    } = props;

    return (
        <div
            id={id}
            className='card movie'
        >
            <div className='card-image waves-effect waves-block waves-light'>
                {poster === "N/A" ? (
                    <img
                        className='activator'
                        src={`https://via.placeholder.com/200x280?text=${title}`}
                    /> //это сайт с картинками заглушками
                ) : (
                    <img
                        className='activator'
                        src={poster}
                    />
                )}
            </div>
            <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                    {title}
                </span>
                <p>
                    {year} <span className='right'>{type}</span>
                </p>
            </div>
        </div>
    );
}

export { Movie };
