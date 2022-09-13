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
                    <div className="logo speed-in-right title" title="Spring">
                        <Icon icon="logos:spring" />
                    </div>
                    <div className="logo speed-in-right" title="React">
                        <Icon icon="logos:react" />
                    </div>
                    <div className="logo speed-in-right" title="Bootstrap">
                            <Icon icon="logos:bootstrap" />
                    </div>
                    <div className="logo speed-in-right" title="Java">
                            <Icon icon="logos:java" />
                    </div>
                     <div className="logo speed-in-right" title="Javascript">
                        <Icon icon="logos:javascript" />
                    </div>
                    <div className="logo speed-in-right" title="Typescript">
                        <Icon icon="vscode-icons:file-type-typescriptdef-official" />
                    </div>
                    <div className="logo speed-in-right" title="PHP">
                        <Icon icon="logos:php" />
                    </div>
                    <div className="logo speed-in-right" title="MySQL">
                        <Icon icon="logos:mysql" />
                    </div>
                    <div className="logo speed-in-right" title="Postgresql">
                        <Icon icon="logos:postgresql" />
                    </div>
                    <div className="logo speed-in-right" title="MongoDB">
                        <Icon icon="logos:mongodb" />
                    </div>
                    <div className="logo speed-in-right" title="AWS">
                        <Icon icon="logos:aws" />
                    </div>
                    <div className="logo speed-in-right" title="Google Cloud">
                        <Icon icon="logos:google-cloud" />
                    </div>
                    <div className="logo speed-in-right" title="Laravel">
                        <Icon icon="logos:laravel" />
                    </div>
                </div>
                <div className="brand-border"></div>
            </section>
        </>
     );
}
 
export default Stacks;