import { Table } from 'antd';

const TableBoardDemo = ({ data, className }) => {
  let shapeObject = 'bg-gray-300 w-full h-1 rounded-md';

  const columns = [
    {
      title: <div className={shapeObject}></div>,
      dataIndex: 'name',
      key: 'name',
      render: () => <div className={shapeObject}></div>,
    },
    {
      title: <div className={shapeObject}></div>,
      dataIndex: 'name',
      key: 'name',
      render: text => text && <div className={shapeObject}></div>,
    },
    {
      title: <div className={shapeObject}></div>,
      dataIndex: 'name',
      key: 'name',
      // Phần render bị cắt, giả sử là render một text đơn giản
      render: text => text,
    },
  ];

  return (
    <Table columns={columns} dataSource={data} className={className} />
  );
};
export default TableBoardDemo