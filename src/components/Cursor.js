import React from 'react';
import PropTypes from 'prop-types';

class Cursor extends React.PureComponent {
  render() {
    const {len, activeKey, styles, ...others} = this.props;
    const transform = `translateX(${activeKey * 100}%)`;
    return (
      <div
        className={styles.cursorWrap}
        style={{width: `${100 / len}%`, transform, WebkitTransform: transform}}
      >
        <div className={styles.cursor} {...others}></div>
      </div>
    );
  }
}

Cursor.propTypes = {
  activeKey: PropTypes.number.isRequired,
  len: PropTypes.number.isRequired,
  styles: PropTypes.object.isRequired,
};

export default Cursor;
