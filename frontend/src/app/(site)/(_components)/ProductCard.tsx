import Image from "next/image";
import Link from "next/link";
import styles from "./productCard.module.css";
import { sportsItemType } from "@/types/sportsItem";

export default function ProductCard(sportItem: sportsItemType) {
    return(
        <div className={styles.productCard}>
           <Link href={`/product/${sportItem.id}`} className={styles.productLink}>
                <Image className={styles.productImage} src={sportItem.image} alt={sportItem.name}  width={300} height={200}/>
           </Link>
           <h1 className={styles.productName}>{sportItem.name} </h1>
           <p className={styles.productCategory}>Categoria: {sportItem.category}</p>
           <p className={styles.productBrand}>Marca: {sportItem.brand}</p>
           <p className={styles.productYear}>Lançamento: {sportItem.year}</p>
           <p className={styles.productPrice}>Preço: R$ {sportItem.price}</p>
           <p className={styles.productStock}>{sportItem.amount} em estoque</p>
           {sportItem.amount > 0 ? (
                <button className={styles.productButton}>Comprar</button>
           ) : (
                <button className={styles.productButton} disabled>Indisponível</button>
           )}
        </div>
    )
}
           
    
