/* eslint-disable no-unused-vars */
import { MailOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import './PopoverSettingWorkSpaces.scss'

const PopoverSettingWorkSpaces = () => {
    const items = [
        {
          label: 'work managerment overview',

        },
        {
            type: 'divider',
        },
        {
          label: 'Rename workspace',
        },
        {
          label: 'Change icon',
        },
        {
          label: 'Manage WorkSpace',
        },
        {
          label: 'Save as template',
        },
        {
          label: 'Delete WorkSpace',
        },
        {
            type: 'divider',
        },
        {
            label: 'Add new WorkSpace',
        },
        {
            label: 'Browse all WorkSpace',
        },
        {
            type: 'divider',
        },
        {
            label: 'Collapse all folders',
        },
        {
            type: 'divider',
        },
        {
            label: 'View archive/trash',
        },

        

    ]
  return (
    <div className='popover_setting_workplace'>
        <Menu
        items={items}
        />
    </div>
  )
}

export default PopoverSettingWorkSpaces