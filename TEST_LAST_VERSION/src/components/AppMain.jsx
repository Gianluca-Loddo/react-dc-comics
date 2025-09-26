import BuyComicsDigitalComics from '../assets/img/buy-comics-digital-comics.png';
import BuyComicsMerchandise from '../assets/img/buy-comics-merchandise.png';
import BuyComicsSubscriptions from '../assets/img/buy-comics-subscriptions.png';
import BuyComicsShopLocator from '../assets/img/buy-comics-shop-locator.png';
import DcPowerVisa from '../assets/img/dc-power-visa.svg';

export default function AppMain() {
    return (
        <main>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={BuyComicsDigitalComics} alt="Buy Comics Digital Comics" />
                    </div>
                    <div className="col">
                        <img src={BuyComicsMerchandise} alt="Buy Comics Merchandise" />
                    </div>

                    <div>
                        <img src={BuyComicsSubscriptions} alt="Buy Comics Subscriptions" />
                    </div>
                    <div className="col">
                        <img src={BuyComicsShopLocator} alt="Buy Comics Shop Locator" />
                    </div>
                    <div>
                        <img src={DcPowerVisa} alt="DC Power Visa" />
                    </div>
                </div>
            </div>
        </main>
    );
}