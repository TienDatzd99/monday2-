/* eslint-disable react/prop-types */
import { Form, Select, Space } from 'antd'
import Input from 'antd/es/input/Input'

// eslint-disable-next-line react/prop-types
const InputDropdown = ({ options, defaultValue, placeholder }) => {

    return (
        <Form.Item>
            <Space.Compact className='w-full'>

                <Input className='px-3 h-[38px] ' style={{ width: '80%' }} placeholder={placeholder} />
                <Select className='h-[38px] '
                    defaultValue={defaultValue}
                    options={options}
                    defaultOpen={false}
                    style={{ width: '20%' }}
                    optionRender={(options)=>{
                      
                        return(
                            <div>
                                <p>{options.data.label}</p>
                                <p>{options.data.desc}</p>
                            </div>
                        )
                    }}
                />




            </Space.Compact>
        </Form.Item>
    )
}

export default InputDropdown