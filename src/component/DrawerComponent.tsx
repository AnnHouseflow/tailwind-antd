import React from 'react';
import { useState } from 'react';
import { Drawer, Collapse, ConfigProvider } from 'antd';
import { CloseCircleOutlined, PaperClipOutlined, BellOutlined } from '@ant-design/icons';

export default function DrawerComponent({ open, setOpen }) {
    const onClose = () => {
        setOpen(false);
    };
    const menu = [
        {
            key: "1",
            label: <>
                <PaperClipOutlined className="mr-2" /><span>附件</span>
            </>,
            children: <ul>
                <li><button type="button" className="cursor-pointer py-3">文件</button></li>
                <li><button type="button" className="cursor-pointer py-3">圖片</button></li>
            </ul>
        },
        {
            key: "2",
            label: <>
                <BellOutlined className="mr-2" /><span>快訊</span>
            </>,
            children: <ul>
                <li><button type="button" className="cursor-pointer py-3">訂閱</button></li>
                <li><button type="button" className="cursor-pointer py-3">通知</button></li>
            </ul>
        }
    ]

    return (
        <>
            <Drawer
                title="Basic Drawer"
                placement="left"
                closable={false}
                onClose={onClose}
                open={open}
                key="left"
                width="80%"
                styles={{
                    body: {
                        paddingBottom: 80,
                    },
                }}
                extra={
                    <CloseCircleOutlined onClick={onClose} style={{ position: 'absolute', top: 20,right: -30, color:'white', fontSize:'24px' }} />
                }
            >
                <ConfigProvider
                    theme={{
                        components: {
                            Collapse: {
                                headerPadding: '8px 0px',
                                headerBg:'#ffffff',
                                contentBg:'#ffffff',
                            }
                        },
                        token:{
                            colorBorder:'#d9d9d9'
                        }
                    }}
                >
                    <Collapse accordion items={menu} expandIconPosition="end" bordered={false} />
                </ConfigProvider>

            </Drawer>
        </>
    );
}