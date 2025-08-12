// lib/firestore.ts
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export async function submitContactForm(data: {
  name: string;
  childAge?: string;
  message: string;
  submittedAt?: Date;
}) {
  return addDoc(collection(db, "contactMessages"), {
    ...data,
    submittedAt: Timestamp.now(),
  });
}
