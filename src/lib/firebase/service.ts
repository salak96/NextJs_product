import { collection, getDocs, getFirestore } from 'firebase/firestore'; // Corrected import
import app from './init';

const fireStore = getFirestore(app);

export async function retrieveData(collectionName: string) {
    const querySnapshot = await getDocs(collection(fireStore, collectionName)); // Changed getDoc to getDocs

    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));

    return data; // Moved this line inside the function
}
