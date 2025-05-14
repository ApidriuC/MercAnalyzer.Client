import { useState } from "react";
import { useSearchProducts } from "../../hooks";
import { Loading } from "../common";
import { IntroductionHome, ProductCardsHome } from "../search";

export const SearchHome = () => {
    const [searchValue, setSearchValue] = useState("");
    const { onSearch, products, loading } = useSearchProducts();

    return (
        <div className="search-home">
            {loading && <Loading />}

            {/* HOME INTRODUCTION */}
            <IntroductionHome />

            {/* SEARCH INPUT */}
            <section className="search-home__content">
                <div className="search-home__input">
                    <input
                        type="text"
                        min={3}
                        maxLength={50}
                        placeholder="¿Qué producto buscas? 🛒"
                        onChange={(e) => setSearchValue(e.target.value)}
                        value={searchValue}
                    />
                    <button
                        className="search-home_button"
                        onClick={() => onSearch(searchValue)}
                    >
                        Buscar
                    </button>
                </div>
            </section >

            {/* PRODUCTS CARDS */}
            <ProductCardsHome products={products} />
        </div >
    );
};