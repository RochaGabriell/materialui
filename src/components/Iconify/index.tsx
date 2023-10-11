import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import { Icon } from '@iconify/react'

import Box from '@mui/material/Box'

type IconifyProps = {
  icon: string
  width?: number
  sx?: object
}

const Iconify = forwardRef<IconifyProps, any>(({ icon, width = 20, sx, ...other }, ref) => (
  <Box
    ref={ref}
    component={Icon}
    className="component-iconify"
    icon={icon}
    sx={{ width, height: width, ...sx }}
    {...other}
  />
))

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  width: PropTypes.number,
  sx: PropTypes.object
}

export default Iconify