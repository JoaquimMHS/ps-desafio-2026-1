"use client"
import { api } from "@/services/api";
import { categoryType } from "@/types/category";
import { useEffect, useState } from "react";
import styles from './categories.module.css'
import { useRouter, useSearchParams } from "next/navigation";

export default function Categories() {

    const [categories, setCategories] = useState<categoryType[]>([]);
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get('category_id');

    useEffect(() => {
        async function getCategories() {
            const { response, error } = await api("GET", "/category");

            if (response) {
                setCategories(response as categoryType[]);
            } else {
                console.error(error?.message);
            }
        }
        getCategories();
    }, []);

    return (

        <div className={styles.container} id="categories">

            
            <div
                
                className={`${styles.circle} ${!currentCategory ? styles.active : ''}`}
                onClick={() => router.push("/", { scroll: false })}
               
            > 
                <h2 className={styles.title}>Todos</h2>
            </div>


            {categories.map((item) => (
                <div 
                    key={item.id} 
                    
                    className={`${styles.circle} ${currentCategory === String(item.id) ? styles.active : ''}`}
                    onClick={() => router.push(`/?category_id=${item.id}`, { scroll: false })}
                    
                >
                    <h2 className={styles.title}>{item.name}</h2>
                </div>
            ))}
        </div>
    )
}