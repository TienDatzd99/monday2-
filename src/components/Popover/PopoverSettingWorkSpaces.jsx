import { MailOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import './PopoverSettingWorkSpaces.scss'

const PopoverSettingWorkSpaces = () => {
    const items = [
        {
          label: 'work managerment overview',
        //   children: [
        //     {
        //       key: '1-1',
        //       label: 'Item 1',
        //       type: 'group',
        //       children: [
        //         {
        //           key: '1',
        //           label: 'Option 1',
        //         },
        //         {
        //           key: '2',
        //           label: 'Option 2',
        //         },
        //       ],
        //     },
        //     {
        //       key: '1-2',
        //       label: 'Item 2',
        //       type: 'group',
        //       children: [
        //         {
        //           key: '3',
        //           label: 'Option 3',
        //         },
        //         {
        //           key: '4',
        //           label: 'Option 4',
        //         },
        //       ],
        //     },
        //   ],
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