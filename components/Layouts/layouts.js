import Header from "../header/header";
import Footer from "../footer/footer";

const Layouts = (props) => {
    return ( 
        <>
            <div className="pagina">
                <Header></Header>
                <main className="contenido-principal">
                    {props.children}
                </main>
                <Footer></Footer>
            </div>
        </>
    );
}
 
export default Layouts;