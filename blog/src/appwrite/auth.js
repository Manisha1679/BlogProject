import config from "../conf/config";
import { Client, Account, ID } from "appwrite";

export class Authenticate {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (user) {
        return this.login({ email, password });
      } else {
        return user;
      }
    } catch(error) {
      throw error;
    }
    return null;
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch(error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      
      const user=await this.account.get();
       console.log("Current user:", user);
       return user;
    } catch(error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }
    return null;
  }
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
    }
  }
}
const authenticate = new Authenticate();

export default authenticate;