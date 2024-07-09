import { AuthContext } from "./authContexts";
import { useContext } from "react";


const useAuth = () => {
    const context = useContext(AuthContext)

    if (context === undefined) {
        console.log('Context must be used in a provider function')
    }
    return context;
  };
  
export default useAuth