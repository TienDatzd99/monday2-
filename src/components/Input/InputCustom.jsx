
import styles from './Input.module.css';
// eslint-disable-next-line react/prop-types
const InputCustom = ({placeholder,onChange,value,onBlur}) => {
    return (
        <div>
            <input 
            onBlur={onBlur}
            onChange={onChange}
            className= {` w-full py-2 px-4 border border-gray-400 rounded-md hover:border-black ${styles.inputField}`} 
            type='text' 
            placeholder={placeholder}
            value={value}/>
            
        </div>
    )
}

export default InputCustom