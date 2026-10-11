const GlassNav = ({ children, className = '', radius = 999, ...rest }) => (
  <div
    className={`glass-nav ${className}`.trim()}
    style={{ '--glass-radius': `${radius}px` }}
    {...rest}
  >
    <div className='glass-nav__content'>{children}</div>
  </div>
)

export default GlassNav
