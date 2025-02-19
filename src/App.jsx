import { useState } from 'react'
import '@ant-design/v5-patch-for-react-19';
import './App.css'
import AntTheme from './theme/AntTheme';

import { Button, ConfigProvider, Pagination, DatePicker, Grid } from "antd";
import { MenuOutlined } from '@ant-design/icons';
import locale from 'antd/locale/zh_TW';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-tw';
import DrawerComponent from './component/DrawerComponent';
import MultipleTags from './component/MulitpleTags';
import TableComponent from './component/TableComponent';

const { useBreakpoint } = Grid;
dayjs.locale('zh-tw');

function App() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const showDrawer = () => {
    setOpen(true);
  };
  const screens = useBreakpoint();

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            roundedSm: '4px'
          },
          components: {
            Button: {
              defaultHoverBg: AntTheme.colorTeriary,
              colorBorder: screens.xs ? 'none' : '#E093C1',
              borderRadius: '90px',
              defaultShadow: 'none'
            },
          }
        }}
        locale={locale}
      >
        <div className="relative">
          <nav className="sticky z-99 top-0 right-0 w-full md:hidden flex justify-between items-center py-7 bg-white">
            <Button type="dashed" icon={<MenuOutlined />} onClick={showDrawer} />
            <DrawerComponent open={open} setOpen={setOpen} />
            <h2 className='text-lg font-bold'>Tailwind + Antd</h2>
            <Button>btnRWD</Button>
          </nav>
          <div className="px-5">
            <h1 className="text-lg font-bold hidden md:block">Tailwind + Antd</h1>
            <p className='mb-12 font-bold text-info'>查詢結果： <span className='text-tertiary'>135</span> 筆資料</p>
            <div className="mb-12">
              <p>目前頁數: {currentPage}</p>
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: AntTheme.colorTeriary
                  }
                }}
              >
                <Pagination
                  defaultCurrent={currentPage}
                  total={500}
                  onChange={(page, pageSize) => setCurrentPage(page)}
                  pageSizeOptions={[25, 50, 75, 100]}
                />
              </ConfigProvider>
            </div>
            <div className="mb-12">
              <p>有 RWD 的 AutoComplete MultipleTags：多餘的 Tags 會折疊</p>
              <MultipleTags />
            </div>
            <div className="mb-12">
              <p>Table 測試</p>
              <TableComponent />
            </div>
            <div className="mb-12">
              <p>時間選擇器</p>
              <DatePicker defaultValue={dayjs('2025/02/13')} format={{
                format: 'YYYY-MM-DD',
                type: 'mask',
              }} />
            </div>
          </div>
        </div>
      </ConfigProvider>
    </>
  )
}

export default App
