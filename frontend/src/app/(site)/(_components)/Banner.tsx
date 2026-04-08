"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from './banner.module.css'
import { ImageResponse } from "next/server";

export default function Banner() {

    const images = [
        "/assets/images/banner.png",
        "/assets/images/banner2.png",
        "/assets/images/banner3.png"
    ];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((currentImage + 1) % images.length);
        }, 3000);

        return () => clearInterval(timer);

    }, [currentImage, images.length]);
    return (
        <div className={styles.container}>
            {<Image className={styles.bannerImage} src={images[currentImage]} alt="Banner" width={1200} height={400} />}
            <button className={`${styles.botaoCarrosel} ${styles.botaoAnterior}`} onClick={() => setCurrentImage((currentImage - 1 + images.length) % images.length)} >&#10094;</button>
            <button className={`${styles.botaoCarrosel} ${styles.botaoProximo}`} onClick={() => setCurrentImage((currentImage + 1) % images.length)}>&#10095;</button>
        </div>
    )
}