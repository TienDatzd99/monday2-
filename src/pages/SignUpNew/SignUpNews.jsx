// import React from 'react'

import ButtonCustom from "../../components/Button/ButtonCustom"
import ButtonGoogle from "../../components/Button/ButtonGoogle"
import InputCustom from "../../components/Input/InputCustom"

const SignUpNews = () => {
    return (
        <div className='h-screen flex'>
            <div className='content_signup w-7/12 bg-orange-400'>
                <h1>
                    Welcome to monday.com
                </h1>
                <p>Get started - it{"'"}s free. No credit card needed.  </p>
                <ButtonGoogle />
                <div>
                    <div className="line_cross"></div>
                    <span>Or</span>
                    <div className="line_cross"></div>
                </div>
                <InputCustom placeholder="namecompany@gmail.com" />
                <ButtonCustom content="continue" />
                <p>By proceeding, you agree to the</p>
                <p> <a href="#">Terms of Service </a>
                    and
                    <a href="#"> Privacy Policy</a></p>
            </div>
            <div className='image_signup w-5/12 ' style={{ backgroundColor: "#585afa" }}>
                <img className="my-60" src="/public/1692552403544.png" />

            </div>

        </div>
    )
}

export default SignUpNews