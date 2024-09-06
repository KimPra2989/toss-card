import {
  FocusEventHandler,
  forwardRef,
  InputHTMLAttributes,
  useState,
} from 'react'
import Input from '../Input/Input'
import { Text } from '../Text/Text'
import Flex from '../Flex/Flex'
import { css } from '@emotion/react'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode
  hasError?: boolean
  helpMessage?: React.ReactNode
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(
    { label, hasError, helpMessage, onFocus, onBlur, ...props },
    ref,
  ) {
    const [focused, setFocused] = useState(false)

    const labelColor = hasError ? 'red' : focused ? 'blue' : 'black'

    const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
      setFocused(true)
      onFocus?.(e)
    }
    const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
      setFocused(false)
      onBlur?.(e)
    }
    return (
      <Flex direction="column" gap={6}>
        {label ? (
          <Text typography="t7" color={labelColor} display="inline-block">
            {label}
          </Text>
        ) : null}
        <Input
          ref={ref}
          aria-invalid={hasError}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {helpMessage ? (
          <Text
            typography="t6"
            color={labelColor}
            display="inline-block"
            css={helpMeassageStyles}
          >
            {helpMessage}
          </Text>
        ) : null}
      </Flex>
    )
  },
)

const helpMeassageStyles = css`
  font-size: 12px;
`

export default InputField
