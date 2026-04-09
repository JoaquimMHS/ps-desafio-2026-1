"use client";
import { sportingGoodsType } from '@/types/sportsItem';
import styles from './products.module.css';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import { Item } from '@radix-ui/react-dropdown-menu';
import { api } from '@/services/api';
import { useSearchParams } from 'next/navigation';

export default function Products() {

    const [sportsItems, setSportsItems] = useState<sportingGoodsType[]>([]);
    const searchParams = useSearchParams();
    const categoryId = searchParams.get("category_id");

  useEffect(() => {
    async function getSportsItems() {
      const endPoint = categoryId
        ? `/sportingGoods?category_id=${categoryId}`
        : "/sportingGoods";

      const { response, error } = await api("GET", endPoint);

      if (response) {
        setSportsItems(response as sportingGoodsType[]);
      } else {
        console.error(error?.message);
      }
    }

    getSportsItems();
  }, [categoryId]);
    return (
        <section className={styles.products} id="products">
            <div className={styles.container}> 
                <h1 className={styles.title}>Nossos Produtos</h1>
                <div className={styles.productsList}>
                    {sportsItems.map((item) => (
                        <ProductCard key={item.id} {...item} />
                    ))}
                
                </div>     
            </div>
        </section>
    )
}