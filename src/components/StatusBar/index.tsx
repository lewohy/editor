import React, { useState } from 'react';
import './style.scss';

import StatusBarButton from './StatusBarButton';

interface StatusBarProp {
    children: React.ReactNode;
}

export default function StatusBar(props: Readonly<StatusBarProp>) {

    return (
        <div
            className="status-bar">
            
            { props.children }

        </div>
    );
};
