import React from "react";
import "./Home.css";
import Product from "./Product";

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Home() {
    return (
        <div className="home">
            <a href="https://www.amazon.co.uk/gp/video/storefront/?_encoding=UTF8&node=2676882011rh=i%3Aprime-instant-video%2Cn%3A2676882011&ref=dvm_uk_xs_gw_e_en_all_025">
                <img
                    className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB406828641_.jpg"
                    alt="Prime"
                />
            </a>
            <div className="home_row">
                <Product
                    id={1}
                    title="DOQAUS Bluetooth Headphones Over Ear, [52 Hrs Playtime] Wireless Headphones, 3 EQ Modes, Foldable Hi-Fi Stereo Bass Headphones, Soft Memory Protein Earmuffs, Built-in Mic ＆ Wired Mode for TV/PC/Phone"
                    price={34.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61LnmC0aRrL._AC_UY218_.jpg"
                />
                <Product
                    id={2}
                    title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric"
                    price={49.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61u48FEs0rL._AC_UY218_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id={3}
                    title="Russell Hobbs RHM2076B 20L Digital 800 W Solo Microwave Black"
                    price={54.99}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61nrG8m4TDL._AC_UY218_.jpg"
                />
                <Product
                    id={4}
                    title="Aucma Stand Mixer, 6.2 L Stainless Steel Mixing Bowl, 6 Speed 1400W Tilt-Head Food Mixer, Kitchen Electric Mixer with Doug..."
                    price={89.94}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61aT8jl8THL._AC_UY218_.jpg"
                />
                <Product
                    id={4}
                    title="Penguin Home Decorative Double Sided Square Cushion Covers, 100% Cotton, 45x45cm Stylish Geometric Pattern for Living Room..."
                    price={17.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81JSVzG0cEL._AC_UY218_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id={5}
                    title="Samsung 2020 75&quot; Q800T QLED 8K HDR 2000 Smart TV with Tizen OS, TITAN BLACK"
                    price={3999.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81FHrRsYUKL._AC_UY218_.jpg"
                />
            </div>

        </div>
    )
}

export default Home;