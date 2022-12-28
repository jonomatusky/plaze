import React from 'react'
import { Controller } from 'react-hook-form'
import {
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Box,
} from '@mui/material'
import TextFielder from 'components/TextFielder'

const FormField = ({ formField, control }) => {
  const { name, label, type, helpText, placeholder } = formField

  const renderField = ({ field, fieldState }) => {
    const { onChange, onBlur, value } = field
    const { error } = fieldState

    const handleCheckboxChange = event => {
      onChange(event.target.checked)
    }

    switch (type) {
      case 'boolean':
        return (
          <Box pl={2}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={value} onChange={handleCheckboxChange} />
                }
                label={label}
              />
            </FormGroup>
            {!!helpText && (
              <Typography fontSize="14px" color="secondary">
                <i>{helpText}</i>
              </Typography>
            )}
          </Box>
        )
      default:
        return (
          <>
            <TextFielder
              label={label}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={Boolean(error)}
              helperText={error?.message}
              type={type}
            />
            {!!helpText && (
              <Typography fontSize="14px" color="secondary" pt={1}>
                <i>{helpText}</i>
              </Typography>
            )}
          </>
        )
    }
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return renderField({ field, fieldState })
      }}
    />
  )
}

export default FormField
