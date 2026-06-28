export type AuthUser = {
    id: string;
    name: string;
    email: string;
    role: "ADMIN" | "LAB_TECH";
  };
  
  const USER_KEY = "mini_lab_user";
  
  export function saveUser(user: AuthUser) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  
  export function getUser(): AuthUser | null {
    const savedUser = localStorage.getItem(USER_KEY);
  
    if (!savedUser) {
      return null;
    }
  
    return JSON.parse(savedUser);
  }
  
  export function clearUser() {
    localStorage.removeItem(USER_KEY);
  }