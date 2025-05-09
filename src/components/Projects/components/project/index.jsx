'use client';
import React from 'react'
import styles from './style.module.scss';

export default function index({index, title, category, link, manageModal}) {

    const handleClick = () => {
        if (link) {
            window.open(link, '_blank'); 
        }
    };

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}}  onClick={handleClick} className={styles.project}>
            <h2>{title}</h2>
            <p>{category}</p>
        </div>
    )
}
