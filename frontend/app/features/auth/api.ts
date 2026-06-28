type LoginPayload = {
    email: string;
    password: string;
  };
  
  type LoginResponse = {
    user: {
      id: string;
      name: string;
      email: string;
      role: "ADMIN" | "LAB_TECH";
    };
  };
  
  export async function loginUser(payload: LoginPayload): Promise<LoginResponse> {
    console.log("Mock login:", payload);
  
    return {
        user: {
          id: "1",
          name: payload.email.includes("tech") ? "Lab Technician" : "Admin User",
          email: payload.email,
          role: payload.email.includes("tech") ? "LAB_TECH" : "ADMIN",
        },
      };
  }