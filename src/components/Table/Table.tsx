import React from 'react'
import { color } from '../../types';
import classes from './Table.module.scss';


interface TableProps {
  data: { [key: string]: string | number}[];
  /**
   * headers should match keys in data props
   * but can be uppercase for display purposes
   */
  headers: string[];
  color?: color;
}
const Table:React.FC<TableProps> = ({color, ...props}) => {
const heading = props.headers.map(head => (<th key={head}>{head}</th>))
  return (
    <table className={`${classes.table} ${color && color}`}>
        <thead>
          <tr>{heading}</tr>
        </thead>
        <tbody>
        {props.data.map((entry, index) => {
          return (
            <tr key={index}>
              {props.headers.map((x, i) => <td key={`${x}-${i}`}>{entry[x.toLowerCase()]}</td>)}
            </tr>
          )
        })}
        </tbody>
    </table>
  )
}

export default Table
