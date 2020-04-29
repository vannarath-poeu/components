import styled from 'styled-components'
import PropTypes from 'prop-types'
import {TYPOGRAPHY, COMMON, get} from './constants'
import theme from './theme'


export const Heading = ({as, ...props}) => <Text as={as} fontWeight="bold" margin="0" fontSize={[`mobileHeadingSizes.${as}`, `mobileHeadingSizes.${as}`, `headingSizes.${as}`]} {...props} />

Heading.defaultProps = {
  theme,
  as: 'h2'
}

Heading.propTypes = {
  as: PropTypes.oneOf('h1', 'h2', 'h3', 'h4', 'h5', 'h6'),
  theme: PropTypes.object,
  ...COMMON.propTypes,
  ...TYPOGRAPHY.propTypes
}

export default Heading
