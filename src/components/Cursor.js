import React from 'react';
import styles from './Cursor.less';
import cn from 'classnames';
import PropTypes from 'prop-types';

class Cursor extends React.PureComponent {
  render() {
    const {len, index, className, ...others} = this.props;
    const transform = `translateX(${index * 100}%)`;
    return (
      <div
        className={styles.cursorWrap}
        style={{width: `${100 / len}%`, transform, WebkitTransform: transform}}
      >
        <div className={cn(styles.cursor, className)} {...others}></div>
      </div>
    );
  }
}

Cursor.propTypes = {
  className: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  len: PropTypes.number.isRequired,
};

export default Cursor;
