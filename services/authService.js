import { ref, set, get, child } from "firebase/database";
import { database } from "./firebaseConfig";

export default class AuthService {
  // Registro no Realtime Database
  async register({ email, password, userType, cpf, cep, tags }) {
    const userRef = ref(database, `users/${email.replace(".", "_")}`);

    // Verifica se usuário já existe
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      throw new Error("Email já cadastrado");
    }

    // Salva usuário
    await set(userRef, {
      email,
      password, // ⚠️ texto puro, só protótipo
      userType,
      cpf: cpf || null,
      cep: cep || null,
      tags: tags || [],
      createdAt: new Date().toISOString(),
    });

    return true;
  }

  // Login no Realtime Database
  async login(email, password) {
    const userRef = ref(database, `users/${email.replace(".", "_")}`);
    const snapshot = await get(userRef);

    if (!snapshot.exists()) {
      throw new Error("Email não cadastrado");
    }

    const userData = snapshot.val();

    if (userData.password !== password) {
      throw new Error("Senha incorreta");
    }

    return userData;
  }
}
