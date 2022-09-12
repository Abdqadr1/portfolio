import { Icon } from '@iconify/react';
import { useEffect, useRef } from 'react';
import observe from './observer';
const Stacks = () => {
    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            observe(ref.current);
        }
    })
    return ( 
        <>
            <section className="section-brands" ref={ref} data-animate="stacks">
                <div className="brand-border"></div>
                <div className="brands">
                    <div className="logo speed-in-right">
                        <Icon icon="logos:spring" />
                    </div>
                    <div className="logo speed-in-right">
                        <Icon icon="logos:react" />
                    </div>
                    <div className="logo speed-in-right">
                            <Icon icon="logos:bootstrap" />
                    </div>
                    <div className="logo speed-in-right">
                            <Icon icon="logos:java" />
                    </div>
                     <div className="logo speed-in-right">
                        <Icon icon="logos:javascript" />
                    </div>
                    <div className="logo speed-in-right">
                        <Icon icon="vscode-icons:file-type-typescriptdef-official" />
                    </div>
                    <div className="logo speed-in-right">
                        <Icon icon="logos:php" />
                    </div>
                    <div className="logo speed-in-right">
                        <Icon icon="logos:mysql" />
                    </div>
                    <div className="logo speed-in-right">
                        <Icon icon="logos:postgresql" />
                    </div>
                    <div className="logo speed-in-right">
                        <Icon icon="logos:mongodb" />
                    </div>
                    <div className="logo speed-in-right">
                        <Icon icon="logos:aws" />
                    </div>
                    <div className="logo speed-in-right">
                        <Icon icon="logos:google-cloud" />
                    </div>
                    <div className="logo speed-in-right">
                        <Icon icon="logos:laravel" />
                    </div>
                </div>
                <div className="brand-border"></div>
            </section>
        </>
     );
}
 
export default Stacks;