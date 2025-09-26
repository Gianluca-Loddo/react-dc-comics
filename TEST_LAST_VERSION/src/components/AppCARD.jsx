import ComicsData from '../data/comics.js';


export default function AppCARD() {
    return (
        <>
            {ComicsData.map((comic) => (
                <div className="card" key={comic.id}>
                    <img src={comic.thumb} alt={comic.series} />
                    <h5>{comic.series}</h5>
                </div>
            ))}
        </>
    );
}
        
        
        
        