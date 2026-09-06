export type ProductCategory = "Kitchen" | "Home" | "Travel" | "Tech";
export type Product = { id: string; name: string; category: ProductCategory; price: number; };
const names = ["Burr Coffee Grinder","Cast Iron Pan","Travel Organizer","USB-C Hub","Table Lamp","Pour Over Kettle","Packing Cubes","Mechanical Keyboard","Storage Basket","Chef Knife"];
const categories: ProductCategory[] = ["Kitchen","Home","Travel","Tech"];
export const products: Product[] = Array.from({length:2000},(_,index)=>({
 id:`P-${String(index+1).padStart(4,"0")}`,
 name:`${names[index%names.length]} ${Math.floor(index/names.length)+1}`,
 category:categories[index%categories.length],
 price:799 + ((index*173)%5200)
}));
