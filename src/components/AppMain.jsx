import BuyComicsDigitalComics from '../assets/img/buy-comics-digital-comics.png';
import BuyComicsMerchandise from '../assets/img/buy-comics-merchandise.png';
import BuyComicsSubscriptions from '../assets/img/buy-comics-subscriptions.png';
import BuyComicsShopLocator from '../assets/img/buy-comics-shop-locator.png';
import DcPowerVisa from '../assets/img/buy-dc-power-visa.svg';


import ComicsData from '../data/comics.js';
import AppCARD from './AppCARD';



export default function AppMain() {
    return (
        <main>
            {/*JUMBOTRON*/}
            <div className="jumbotron">
            </div>

            {/*BLACK BANNER*/}
            <div className='bg-dark'>
                <div className="container">
                    BLACK BANNER
                </div>
            </div>

            {/*COMICS CARDS*/}
            <div className="container">
                <div className="row">
                    
                        {ComicsData.map((comic) => (
                            <div className="col-2">
                            <AppCARD
                                key={comic.id}
                                thumb={comic.thumb}
                                series={comic.series}
                            />
                            </div>
                        ))}
                    
                </div>
            </div>

            {/*BLUE BANNER*/}
            <div className='background-main'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={BuyComicsDigitalComics} alt="Buy Comics Digital Comics" />
                            <a href="#">DIGITAL COMICS</a>
                        </div>
                        <div className="col">
                            <img src={BuyComicsMerchandise} alt="Buy Comics Merchandise" />
                            <a href="#">DC MERCHANDISE</a>
                        </div>
                        <div className="col">
                            <img src={BuyComicsSubscriptions} alt="Buy Comics Subscriptions" />
                            <a href="#">SUBSCRIPTION</a>
                        </div>
                        <div className="col">
                            <img src={BuyComicsShopLocator} alt="Buy Comics Shop Locator" />
                            <a href="#">COMIC SHOP LOCATOR</a>
                        </div>
                        <div className="col">
                            <img src={DcPowerVisa} alt="DC Power Visa" />
                            <a href="#">DC POWER VISA</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}