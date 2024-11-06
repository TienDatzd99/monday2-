import '../LayoutViewBoard/LayoutViewBoard.scss';
import TableBoardDemo from '../../components/TableBoardDemo/TableBoardDemo';

// eslint-disable-next-line react/prop-types
const LayoutViewBoard = ({ nameBoard }) => {
  const data = [
    { name: '123' },
    { name: '123' },
    { name: '' },
  ];

  return (
    <div className="bg-white w-11/12 p-10 pr-0 layout_board_demo">
      {/* title */}
      <div className="board_demo_title mb-20">
        {nameBoard ? (
          <p>{nameBoard}</p>
        ) : (
          <div className="bg-gray-300 w-40 h-2 rounded-md"></div>
        )}
      </div>

      {/* table 1 */}
      <TableBoardDemo data={data} />

      {/* table 2 */}
      <TableBoardDemo data={data} className="border_board_green" />
    </div>
  );
};

export default LayoutViewBoard;
