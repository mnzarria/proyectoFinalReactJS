import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import products from '../data/stickers.json'; //Colocamos la ruta donde está ubicado el json.

//NOTA: también se puede hacer algo similar con un bucle dentro de Object.entries (pero ya es nivel un pcoo más avanzado)

const saveFromJSONToFirebase = async () => {
    try {    
        products.forEach(async (product) => {
            //Adaptar el objeto a las propiedades del producto
            const docRef = await addDoc(collection(db, "products"), {
                cod: product.cod,
                name: product.name,
                country: product.country,
                stock: product.stock || 10,
                image: product.image,
                category: product.category,
                price: product.price,
            });
            console.log("Document written with ID: ", docRef.id);
        })
        
    } catch (error) {
        console.log(error)
    }
}

export default saveFromJSONToFirebase;