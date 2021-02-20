import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <p>Created by Tessa Seiders</p>
            <p>Copyright {(new Date().getFullYear())}</p>
        </div>
    )
}

export default Footer
