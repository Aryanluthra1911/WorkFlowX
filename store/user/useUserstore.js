import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
    persist(
        (set) => ({
            user: null,
            setUser: (data) => set({ user: data }),
            clearUserStore: () => set({ user: null }),
        }),
        {
            name: "user-storage",
            partialize: (state) => ({
                user: state.user
                    ? {
                        id: state.user.id,
                        name: state.user.name,
                        email: state.user.email,
                        role: state.user.role,
                        c_name: state.user.c_name
                    }
                    : null
            })
        }
    )
);

export default useUserStore;