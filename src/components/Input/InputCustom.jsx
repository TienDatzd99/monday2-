// InputCustom.js
import styles from './Input.module.css';

// eslint-disable-next-line react/prop-types, no-unused-vars
const InputCustom = ({ field, form, placeholder, ...props }) => {
    return (
        <div>
            <input 
                {...field} // Nhận giá trị và onChange từ Formik
                {...props}
                placeholder={placeholder}
                className={`w-full py-2 px-4 border border-gray-400 rounded-md hover:border-black ${styles.inputField}`}
                type="text"
            />
        </div>
    );
};

export default InputCustom;
