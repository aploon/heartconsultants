import axios from "../lib/axios";

export const authService = {
  async login(email: string, password: string) {
    // Obtenir le cookie CSRF
    await axios.get('/sanctum/csrf-cookie');
    
    // Faire la requête de login
    const response = await axios.post('/login', {
      email,
      password
    });
    return response.data;
  },

  async logout() {
    await axios.post('/logout');
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
  },

  async getUser() {
    try {
      const response = await axios.get('/me');
      return response.data;
    } catch {
      return null;
    }
  },

  async isAuthenticated() {
    try {
      const user = await this.getUser();
      return !!user;
    } catch {
      return false;
    }
  }
};

// Fonction utilitaire pour récupérer un cookie
function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() ?? null;
  return null;
} 