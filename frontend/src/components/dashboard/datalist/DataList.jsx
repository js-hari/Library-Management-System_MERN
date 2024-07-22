import "./datalist.scss";

import PropTypes from 'prop-types';

const DataList = ({heading,subheading,data,columns}) => {
DataList.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  keys: PropTypes.array.isRequired
};
  console.log(data);
  return (
    <div className="datalist__wrapper">
        <h2>{heading}</h2>
        <span>{subheading}</span>

        <div className="table__wrapper bg__accent">
            <table cellSpacing="0" cellPadding="0">
                <thead>
                  <tr className="bg__secondary">
                    <td>Sr#</td>
                    {
                      columns?.map((column)=>{
                        return <td key={column}>{column}</td>
                      })
                    }
                  </tr>
                </thead>
                <tbody>
                  {
                    data?.map((i, index)=>{
                      return <tr key={index}>
                        <td>1</td>
                        <td>101</td>
                        <td>Data Sturcture and Algorithm</td>
                        <td>John Doe</td>
                        <td>Computer Science</td>
                        <td>13 Fab 2023</td>
                      </tr>
                    })
                  }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default DataList