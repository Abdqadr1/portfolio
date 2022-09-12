
import { Icon } from '@iconify/react';
import { enableDarkMode, disableDarkMode } from "./mode";
const DarkMode = () => {
    
    const handleToggle = () => {
        if (localStorage.getItem("mode") === "dark") {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    }
    return ( 
        
        <div title="toggle dark mode">
            <Icon onClick={handleToggle} className="fs-4 dark-toggle" icon="icon-park-solid:dark-mode" />
        </div>
     );
}
 
export default DarkMode;