import React from 'react';
import Drawer from "./Drawer";

function Layout({children}) {
    return (
        <div>
            <Drawer/>
            <div>{children}</div>
        </div>
    );
}

export default Layout;