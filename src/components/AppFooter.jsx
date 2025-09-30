import footerData from "../data/footerData";

export default function AppFooter() {

return (
<footer>
    <div className="backgroundImgFooter">
        <div className="container"> {/*bootstrap riconosce container*/}
            <div className="row">
                {footerData.map((titleFooter, idFooter) => (
                    <div className="col" key={idFooter}> {/*gli passo l'id della colonna che corrisponde al primo id di footerData*/}
                        <h6 className="text-light">{titleFooter.title}</h6> {/*gli passo il title di footerData*/}
                        <ul>{titleFooter.list.map((labelFooter, id2Footer) => 
                            <li key={id2Footer}> {/*gli passo l'id che corrisponde al secondo id di footerData*/}
                               <a href="#">{labelFooter.label}</a>
                            </li>
                        )};
                        </ul>
                    </div>
                ))};
            </div>
        </div>
    </div>
</footer>
)}