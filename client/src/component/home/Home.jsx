import Banner from "../Banner/Banner";
import { lazy } from "react";

const Items = lazy(() => import("../Items/Items"));

import { FiSun, FiStar } from "react-icons/fi";
const BannerText = lazy(() => import("../bannerText/BannerText"));
const TabsNav = lazy(() => import("../Tabs/TabsNav"));

const Home = () => {
    return (
        <>
            <BannerText icon={<FiSun />} text={"¡REALIZA TU PEDIDO AHORA!"} />
            <Banner />
            <TabsNav />
            <BannerText icon={<FiStar />} text={"Sobre Nosotros"} />
            <Items
                idTema={"#mision"}
                image={"https://cdn-icons-png.flaticon.com/512/1239/1239710.png"}
                title={"Misión"}
                text={
                    "Nuestra misión es promover un estilo de vida saludable y sostenible a través de la comercialización de productos orgánicos de alta calidad. En Eco Market, nos comprometemos a ofrecer alimentos frescos, libres de químicos y cultivados de manera responsable, apoyando a productores locales y fomentando el respeto por el medio ambiente. Buscamos inspirar a nuestras comunidades a tomar decisiones conscientes que beneficien su bienestar y el del planeta."
                }
                resaltarText={[
                    "saludable y sostenible",
                    "productos orgánicos de alta calidad",
                    "respeto por el medio ambiente",
                ]}
                diretionY={"column"}
                diretionX={"row"}
            />

            <Items
                idTema={"#vision"}
                image={"https://cdn-icons-png.flaticon.com/512/1644/1644005.png"}
                title={"Visión"}
                text={
                    "Nuestra visión es ser el referente líder en el mercado de productos orgánicos y sostenibles, tanto a nivel local como nacional. Aspiramos a construir una red sólida de consumidores y productores comprometidos con la salud, la calidad y la responsabilidad ambiental. En Eco Market, trabajamos para expandir nuestro impacto positivo, ofreciendo una experiencia de compra consciente, transparente y accesible para todos."
                }
                resaltarText={[
                    "productos orgánicos y sostenibles",
                    "responsabilidad ambiental",
                    "experiencia de compra consciente",
                ]}
                diretionY={"column"}
                diretionX={"row-reverse"}
            />
        </>
    );
};

export default Home;
