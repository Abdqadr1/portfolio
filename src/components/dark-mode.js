
import { Icon } from '@iconify/react';
import { enableDarkMode, disableDarkMode } from "./mode";
import { motion } from "framer-motion"; 
const DarkMode = () => {
    
    const handleToggle = () => {
        if (localStorage.getItem("mode") === "dark") {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    }
    return ( 

        <motion.div
            whileTap={{ rotate: 360, scale: 0.8}}
            >
            <div title="toggle dark mode">
                <Icon onClick={handleToggle} className="fs-4 dark-toggle" icon="icon-park-solid:dark-mode" />
            </div>
        </motion.div>
        
     );
}
 
export default DarkMode;