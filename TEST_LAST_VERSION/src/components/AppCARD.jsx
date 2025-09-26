export default function AppCARD({thumb, series}) {
    // Le props sono passate come oggetto destrutturato, in modo da poterle usare direttamente
    // senza dover scrivere props.thumb, props.series, ecc.

    return (
        
        <div className='CARD'>
            {thumb && ( //Mostra l'immagine solo se thumb è definito (non è null, undefined, false o una stringa vuota), altrimenti non mostra nulla
                <img className='CARD-img' src={thumb} alt={series} />
            )}
            <div className='CARD-description'>
            <h5 className='CARD-title'>{series}</h5>
            </div>
        </div>
    );
}
        
        
        
        