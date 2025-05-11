import { addDoc, collection, query, where, getDocs, setDoc, doc } from "firebase/firestore";
import { firestore } from "./init";

const col = collection(firestore, "books");

export const addBook = async (book, user) => {
  const docRef = doc(collection(firestore, "books"));
  const newBook = {
    ...book,
    id: docRef.id,
  };

  await setDoc(docRef, newBook);
};

export const listBookByUser = async (uid) => {
  const q = query(col, where("uid", "==", uid));
  const snap = await getDocs(q);

  return q.docs.map((doc) => ({ 
    ...doc.data(), 
    id: doc.id }))
      .filter((book) => book.uid === uid);
}