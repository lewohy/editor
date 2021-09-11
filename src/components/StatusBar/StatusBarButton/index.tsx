import React, { useState } from 'react';
import './style.scss';

interface StatusBarButtonProp {
    text: string;
    click: () => void;
}

export default function StatusBarButton(props: Readonly<StatusBarButtonProp>) {
    return (
        <div
            className="status-bar-button"
            onClick={props.click}>
            { props.text }
        </div>
    );
};

