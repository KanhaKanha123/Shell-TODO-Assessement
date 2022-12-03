import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

const Context = ({ children }) => {
    const [state, setState] = useState({ isAddToDoShow: false });

    return <CartContext.Provider value={{ state, setState }}>{children}</CartContext.Provider>
}

export default Context;

//hook which will provide application wise
export const TODOAppState = () => {
    return useContext(CartContext);
}
