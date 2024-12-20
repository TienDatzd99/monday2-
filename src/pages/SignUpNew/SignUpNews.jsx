import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ButtonCustom from "../../components/Button/ButtonCustom";
import ButtonGoogle from "../../components/Button/ButtonGoogle";
import InputCustom from "../../components/Input/InputCustom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { updateEmailAction } from '../../redux/reducers/quanLyNguoiDungReducer';
import { useEffect } from 'react';
const SignUpNews = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
    });



    return (
        <Formik
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                dispatch(updateEmailAction(values.email));
                navigate('/accountform');
                console.log('Form values:', values);
            }}
        >

            <Form className='h-screen flex'>
                <div className='content_signup w-7/12 bg-white flex flex-col items-center justify-center'>
                    <div className='flex flex-1  flex-col justify-center' >
                        <div>
                            <h1 className="font-medium text-5xl mb-5 flex justify-center">
                                Welcome to monday.com
                            </h1>
                            <div className="flex justify-center">
                                <p className="mb-14 text-xl">Get started - it{"'"}s free. No credit card needed.</p>
                            </div>
                        </div>
                        <div>
                            <ButtonGoogle />
                            <div className="my-5 flex justify-center">
                                <div className="line_cross border-t-2 w-full mt-3"></div>
                                <span className="px-2 text-xl">Or</span>
                                <div className="line_cross border-t-2 w-full mt-3"></div>
                            </div>

                            <div>
                                <Field
                                    name="email"
                                    placeholder="namecompany@gmail.com"
                                    component={InputCustom}
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500 mt-1"
                                />
                            </div>

                            <ButtonCustom content="Continue" type="submit" />
                            <div className="grid justify-center text-xl">
                                <p className="items-center pl-2">By proceeding, you agree to the</p>
                                <p>
                                    <a className="text-blue-500" href="#">Terms of Service</a> and
                                    <a className="text-blue-500" href="#"> Privacy Policy</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-16'>
                        Already have an account?
                        <span className='text-cyan-600 cursor-pointer hover:underline' onClick={
                            () => {
                                navigate('/login')
                            }
                        }> Log in</span>
                    </div>
                </div>

                <div className='image_signup w-5/12 flex items-center' style={{ backgroundColor: "#585afa" }}>
                    <img className="" src="/public/1692552403544.png" alt="signup" />
                </div>

            </Form>

        </Formik>
    );
}

export default SignUpNews;
