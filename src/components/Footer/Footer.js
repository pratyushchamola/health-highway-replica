import React from 'react'

import './styles.css'

const Footer = () => {
    return (
        <div className="container">
            <div className="actualFooter">
                <div className="linksDiv">
                {/* links */}
                    <a href="#">FAQ</a>
                    <a href="#">REFER</a>
                    <a href="#">GIFT CARD</a>
                    <a href="#">BLOG</a>
                    <a href="#">HOME</a>
                </div>

                <div className="addressDiv">
                    <p>&copy; 2021 Health Highway.</p>
                    <p>All Right Reserved</p>
                </div>

                <div className="terms">
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
