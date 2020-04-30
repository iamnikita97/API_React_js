import React from 'react';
import Header from './Header';
import Content from './Content';

export default function Layout(props) {
    return (
        <>
           <Header/> 
           <Content page_data={props.children}/> 
        </>
    )
}