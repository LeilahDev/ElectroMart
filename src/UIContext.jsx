import { createContext ,useState, useEffect } from 'react'
import App from './App.jsx';

const MyUIcontext = createContext ();

function UIContext ( {children}) {

    // CHOOSING THE BUTTON TO DISPLAY
    const [showMoreBtn , setShowMoreBtn] = useState (true);

    //CLOSING THE NAVBAR ON SCROLL
     const [isOpen, setIsOpen] = useState(false);
         
        useEffect(() => {
        const handleScroll = () => setIsOpen(false);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        }, []);

       //DISPLAYING THE SUCCESS AND OUT OF STOCK MESSAGE 
        const [outOfStockMsg, setOutOfStockMsg] = useState (false);
        const [successMesage , setSuccessMessage] = useState(false);
       
            useEffect(() => {
            let successTimer;
            let stockTimer;

            if (successMesage) {
                successTimer = setTimeout(() => {
                setSuccessMessage(false);
                }, 2000);
            }

            if (outOfStockMsg) {
                stockTimer = setTimeout(() => {
                setOutOfStockMsg(false);
                }, 2000);
            }

            return () => {
                if (successTimer) clearTimeout(successTimer);
                if (stockTimer) clearTimeout(stockTimer);
            };

            }, [successMesage, outOfStockMsg]);
        

       return (
        <>
                     
         <MyUIcontext.Provider value = {{showMoreBtn,
                                             setShowMoreBtn,
                                             isOpen,
                                             setIsOpen,
                                             outOfStockMsg,
                                             setOutOfStockMsg,
                                             successMesage,
                                             setSuccessMessage
                                            }} >

                         {children}
         
        </MyUIcontext.Provider>
        </>
       )
}

export {MyUIcontext}
export default UIContext;
