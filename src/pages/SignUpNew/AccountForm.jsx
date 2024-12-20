import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ButtonCustom from "../../components/Button/ButtonCustom";
import ButtonGoogle from "../../components/Button/ButtonGoogle";
import InputCustom from "../../components/Input/InputCustom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { dangNhapAction } from '../../redux/reducers/quanLyNguoiDungReducer';

export default function AccountForm() {
 
    const dispatch = useDispatch();
    const email = useSelector(state => state.quanLyNguoiDung.email);
    console.log('Email:', email);
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        fullname: Yup.string()
            .required("Full Name is required"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Password is required"),
        accountName: Yup.string()
            .required("Account name is required")
    });

    return (
        <Formik
            initialValues={{ fullname: '', password: '', email: email,  accountName: '', }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                navigate('/invitemember');
                const action = dangNhapAction(values);
                dispatch(action);
                console.log('Form values:', values);
            }}
        >
            <Form className='h-screen flex'>
                <div className='content_signup w-7/12 bg-white flex flex-col py-16 px-32'>
                    <div>
                        <img src="https://dapulse-res.cloudinary.com/image/upload/platform-products-signup/generic/logo-full-big.png" className='mb-16' alt="monday.com logo" style={{ height: "24px" }} />
                        <div>
                            <h1 className='font-medium text-3xl mb-2'>Create your account</h1>
                            <div className='mb-4'>
                                <label htmlFor="name">Full Name</label>
                                <Field
                                    name="fullname"
                                    placeholder="Enter your full name"
                                    component={InputCustom}
                                />
                                <ErrorMessage name="fullname" component="div" className="text-red-500 mt-1" />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="password">Password</label>
                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="Enter at least 8 characters"
                                    component={InputCustom}
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 mt-1" />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="accountName">Account Name</label>
                                <Field
                                    name="accountName"
                                    placeholder="For example, company's or department's name"
                                    component={InputCustom}
                                />
                                <ErrorMessage name="accountName" component="div" className="text-red-500 mt-1" />
                            </div>
                            <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded mt-4'>Next -{'>'}</button>
                        </div>
                    </div>
                </div>
                <div className='w-5/12' style={{ backgroundColor: "#585afa" }}>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png" alt="Set up your account" />
                </div>
              
            </Form>
        </Formik>
    );
}
