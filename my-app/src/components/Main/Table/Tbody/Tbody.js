import './TBody.css'
export const Tbody = ({tableData}) => {
  return (
    <tbody>
      {tableData.map((item) => (
        <tr className='table-row' key={item.secId}>
          <td className='secId' >{item.secId}</td>
          <td className='shortName' >{item.shortName}</td>
          <td className='lastPrice'>{item.lastPrice}</td>
          <td className='lasttoprevprice'>{item.lasttoprevprice}</td>
          <td className='openPrice'>{item.openPrice}</td>
          <td className='lowPrice'>{item.lowPrice}</td>
          <td className='highPrice'>{item.highPrice}</td>
          <td className='averagePrice'>{item.averagePrice}</td>
          <td className='valToday'>{item.valToday}</td>
          <td className='updateTime'>{item.updateTime}</td>
        </tr>
      ))}
    </tbody>
  );
};
