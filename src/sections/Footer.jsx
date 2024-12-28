import React from 'react'

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <div className="social-icon">
                    <a className="link" href="https://github.com/dennis-tech" target="_blank"><img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/></a>
                </div>
                <div className="social-icon">
                    <a className="link" href="https://x.com/stanleysstar?t=Szg-B9_efDwMlya7rHIW-Q&s=09" target="_blank"><img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2"/></a>
                </div>
                <div className="social-icon">
                    <a className="link" href="https://www.linkedin.com/in/dennis-stanley-irungu/" target="_blank"><img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2"/></a>
                </div>
            </div>

            <p className="text-white-500">© 2024 Dennis S Irungu. All rights reserved.</p>
        </section>
    )
}
export default Footer
