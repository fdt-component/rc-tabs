import React from 'react';
import styles from './Cursor.css';
import cn from 'classnames';
import PropTypes from 'prop-types';

class Cursor extends React.PureComponent {
  render() {
    let {len, index, className, ...others} = this.props;
    len = Math.max(1, len);
    const transform = `translateX(${index * 100}%)`
    return (
      <div
        className={styles.cursorWrap}
        style={{width: `${100 / len}%`, transform, WebkitTransform: transform }}
      >
        <div className={cn(styles.cursor, className)} {...others}></div>
      </div>
    );
  }
}

Cursor.propTypes = {
  className: PropTypes.string.isRequired,
  len: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

module.exports = Cursor;
