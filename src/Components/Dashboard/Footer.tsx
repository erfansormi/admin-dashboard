import { useContext } from 'react'

const Footer = () => {
    return (
        <footer className='content-colors justify-center py-3' style={{ backgroundColor: "inherit" }}>
            <div className='mx-3'>
                © 2022 All rights reserved
            </div>
            <div className='mx-3'>
                website creted by <a style={{ textDecoration: "underline" }} href="https://erfansormi.netlify.app" target={"_blank"}>erfan sormi</a>
            </div>
        </footer>
    )
}

export default Footer;