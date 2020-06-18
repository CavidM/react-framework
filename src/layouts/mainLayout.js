import React from 'react';
import AppHeaderComponent from '../components/app-header/appHeaderComponent';

export default function MainLayout(props) {

    return (
        <div className="app-wrapper">
            <AppHeaderComponent/>

            {props.children}
        </div>
    );
}