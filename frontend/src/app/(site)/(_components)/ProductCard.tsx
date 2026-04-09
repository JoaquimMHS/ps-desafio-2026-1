"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "./productCard.module.css";
import { sportingGoodsType } from "@/types/sportsItem";
import { useState } from "react";
import { buySportsItem } from "@/actions/sportsItem";

export default function ProductCard(sportItem: sportingGoodsType) {

    const submit = async (form: FormData) => {
    const response = await buySportsItem(form);
    const { error } = JSON.parse(response);

    if (error) {
      console.error("Erro ao comprar o produto:", error);
      alert("Não foi possível realizar a compra.");
    } else {
      console.log("Produto comprado com sucesso!");
      window.location.reload();
    }
  };

    return(
        <div className={styles.productCard}>
           <Link href={`/product/${sportItem.id}`} className={styles.productLink}>
                <Image className={styles.productImage} src={sportItem.image_url} alt={sportItem.name}  width={300} height={200}/>
           </Link>
           <h1 className={styles.productName}>{sportItem.name} </h1>
           <p className={styles.productCategory}>Categoria: {sportItem.category.name}</p>
           <p className={styles.productBrand}>Marca: {sportItem.brand}</p>
           <p className={styles.productYear}>Lançamento: {sportItem.year}</p>
           <p className={styles.productPrice}>
               Preço: R$ {Number(sportItem.price).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
           <p className={styles.productStock}>{sportItem.amount} em estoque</p>
           <form action={submit}>
               <input type="hidden" name="id" value={sportItem?.id} />
                {sportItem.amount > 0 ? (
                     <button type="submit" className={styles.productButton}>Comprar</button>
                ) : (
                     <button className={styles.productButton} disabled>Indisponível</button>
                )}
           </form>
        </div>
    )
}
           
    
