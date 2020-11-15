import React from 'react'
import classes from './Grid.module.scss'

interface GridProps{

  rows?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '10' | '11' | '12',
  cols?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '10' | '11' | '12',
  gap?: 'sm' | 'md' | 'lg' | 'xl',
  addClasses?: string;
}

/**
 * Grid Component takes optional paramaters
 *  rows: Amount of rows (1-12)
 *  cols: Amount of Columns (1-12)
 *  gap: Gap Size (sm, md, lg, lg)
 */
const Grid:React.FC<GridProps> = ({ children, rows, cols, gap, addClasses}) => {
  
  return (
    <div
      className={`${classes.grid} ${gap ? classes[gap] : classes['lg']} ${rows ? classes['rows' + rows] : 'rows-12'} ${cols ? classes['cols' + cols] : 'cols-12'} ${addClasses ? addClasses: ''}`}>
      {children}
    </div>
  )
}

export default Grid
