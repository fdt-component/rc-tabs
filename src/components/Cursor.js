import React from 'react';
import styles from './Cursor.css';
import cn from 'classnames';

class Cursor extends React.Component {
  render() {
    let {len, index, className, ...others} = this.props;
    len = Math.max(1, len);
    return (
      <div className={styles.cursorWrap} style={{width: `${100 / len}%`, transform: `translateX(${index * 100}%)`}}>
        <div className={cn(styles.cursor, className)} {...others}></div>
      </div>
    );
  }
}

Cursor.propTypes = {
  className: React.PropTypes.string.isRequired,
  len: React.PropTypes.number.isRequired,
  index: React.PropTypes.number.isRequired,
};

module.exports = Cursor;
