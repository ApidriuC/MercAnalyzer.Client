import { FooterCommon, MyChatBot } from "../components/common";
import { NavBarHome, SearchHome } from "../components/search";
import { HOME_TITLE } from "../constants/constans";

export const HomeLayout = () => {
    document.title = HOME_TITLE;

    return (
        <main className="container-home">
            <NavBarHome />
            <section className="main-content">
                <SearchHome />
            </section>
            <FooterCommon />
            <MyChatBot />
        </main>
    );
}