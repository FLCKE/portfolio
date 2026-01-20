import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
export default function BannerV2() {
    const location = useLocation();

    // Récupérer le dernier segment de l'URL
    var currentPath = location.pathname.split('/').filter((x) => x).pop();
    currentPath=currentPath.toUpperCase();
    return (
        <section className="bannerClass">
            <NavBar/>
            <div className="text-center p-md-3 p-3  zoom-in  ">
                <h1 className="m-md-5  align-middle">{currentPath}</h1>
                
            </div>

        </section>
    )
}