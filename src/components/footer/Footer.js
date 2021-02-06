import React from 'react'
import '../../styles/footer.css'

const fname = "Tessa"
const lname = "Seiders"

const Footer = () => {
    return (
        <div className="footer">
            <p>Created by {`${fname} ${lname}`}</p>
            <p>Copyright {(new Date().getFullYear())}</p>
        </div>
    )
}

export default Footer
