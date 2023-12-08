import { createContext, useContext, useState, useEffect } from 'react';
import { getUser, saveUser } from '../Utils/Storage'; // Replace with your actual storage functions

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (userData) => {
    setUser(userData);
    await saveUser(userData); // Assuming setUser is a storage function to save user data
  };

  const logout = async () => {
    setUser(null);
    await saveUser(null); // Clear user data from storage on logout
  };

  const getLoggedUser = async () => {
    try {
      const storedUser = await getUser(); // Replace with your actual storage function
      return storedUser;
    } catch (error) {
      console.error('Error retrieving user from storage:', error);
      return null;
    }
  };

  const updateUser = async (updatedUser) => {
    saveUser(updatedUser);
    await saveUser(updatedUser); // Update user data in storage
  };

  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = await getUser();
      if (storedUser) {
        saveUser(storedUser);
      }
    };

    fetchUser();
  }, []);

  const contextValue = {
    user,
    login,
    logout,
    getLoggedUser,
    updateUser,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
