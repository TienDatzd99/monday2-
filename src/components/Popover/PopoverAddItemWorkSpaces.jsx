/* eslint-disable no-unused-vars */
import Icon from '@ant-design/icons/lib/components/Icon'
import { Menu } from 'antd'
import React from 'react'
import './PopoverAddItemWorkSpaces.scss'
const PopoverAddItemWorkSpaces = () => {
    const items = [
        {
            label: 'Project Management',
            type: 'group',
            children: [
                {
                    label: 'New project',
                },
                {
                    label: 'New Portfolio',
                },

            ]
        },
        {
            type: 'divider',
        },
        {
            label: 'New Board',
        },
        {
            label: 'New Doc',
        },
        {
            label: 'New Dashboard',
        },
        {
            label: 'Choose from template',
        },
        {
            label: 'import data',
            children: [
                {
                    label: 'From Excel',
                },
                {
                    label: 'From CSV',
                },
                {
                    label: 'From Google Sheet',
                },
                {
                    label: 'From Trello',
                },
                {
                    label: 'From Jira',
                },
                {
                    label: 'From Asana',
                },
                {
                    label: 'From Monday',
                },
                {
                    label: 'From ClickUp',
                },
                {
                    label: 'From Notion',
                },
            ]
        },
        {
            type: 'divider',
        },
        {
            label: 'Apps',
        },
        {
            label: 'New Form',
        },
        {
            type: 'divider',
        },
        {
            label: 'New Folder',
        }




    ]
    return (
        <div className='popover-add-item-workspaces'>
            <Menu
                items={items}
            />
        </div>
    )
}

export default PopoverAddItemWorkSpaces