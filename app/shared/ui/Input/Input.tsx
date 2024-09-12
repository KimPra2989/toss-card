import { colors } from '@/shared/styles/colorPalette'
import styled from '@emotion/styled'

const Input = styled.input`
  padding: 0 16px;
  font-size: 15px;
  height: 48px;
  font-weight: 500;
  border: 1px solid ${colors.black};
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    color: ${colors.blue};
    border-color: ${colors.blue};
  }

  &[aria-invalid='true'] {
    color: ${colors.red};
    border-color: ${colors.red};
  }
`

export default Input
