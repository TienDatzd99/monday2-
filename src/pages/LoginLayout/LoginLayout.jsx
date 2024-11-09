import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { dangNhapAction } from '../../redux/reducers/quanLyNguoiDungReducer';

const LoginLayout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
    });

    const onSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            console.log('Form data', values);
            await dispatch(dangNhapAction(values, navigate));
            // Thực hiện các hành động khác như gửi dữ liệu lên server hoặc điều hướng
        } catch (error) {
            console.error('Login error:', error);
            setErrors({ submit: 'Login failed. Please try again.' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div>
            <header className='py-4' style={{ backgroundColor: "#f7f7f7" }}>
                <div className="login-monday-top-header-wrapper">
                    <div className="top-header-component">
                        <img className="account-logo" style={{ width: 160, height: 44, marginLeft: 18 }} src="https://cdn.monday.com/images/logos/monday_logo_short.png" alt="Monday logo" />
                    </div>
                </div>
            </header>
            <div className='p-10'>
                <div className="w-full h-screen flex flex-col items-center mt-10">
                    <h1 className="text-3xl mb-8">Log in to your account</h1>
                    <div className="w-1/3 bg-white p-10 rounded-lg shadow-lg">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {({ isSubmitting, errors }) => (
                                <Form>
                                    <div className="mb-4 flex items-center flex-col">
                                        <h2 className='mb-1'>Enter your work email address</h2>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Example@company.com"
                                            className="border border-gray-300 p-2 w-full rounded"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-red-500 mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Field
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                            className="border border-gray-300 p-2 w-full rounded mb-2"
                                        />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="text-red-500 mt-1"
                                        />
                                    </div>
                                    {errors.submit && (
                                        <div className="text-red-500 mb-2">{errors.submit}</div>
                                    )}
                                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded" disabled={isSubmitting}>
                                        Next -&gt;
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className='flex w-1/2 items-center justify-center'>
                        <hr className="my-8 w-1/3 border-gray-300" />
                        <span className='mx-3'>Or Sign in with</span>
                        <hr className="my-8 w-1/3 border-gray-300" />
                    </div>
                    <div className="social-login-component" role="group" aria-label="Social media login buttons">
                        <button type="button" className="flex rounded-md mb-4" style={{ border: "1px solid #c5c7d0", padding: "12px 16px" }}>
                            <img className="social-login-logo mr-2" src="https://cdn.monday.com/images/logo_google_v2.svg" aria-hidden="true" alt="Google logo" />
                            <div className="social-login-provider-name" aria-label="Login with Google">Google</div>
                        </button>
                    </div>
                    <div>
                        <div>
                            Don't have an account yet?
                            <span className="text-blue-500 cursor-pointer hover:underline" onClick={() => navigate('/signup')}> Sign up</span>
                        </div>
                        <div>
                            Can't log in?
                            <span className="text-blue-500 cursor-pointer hover:underline" onClick={() => navigate('/help')}> Visit our help center</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginLayout;