import React, { useState } from 'react'
import {
  UseFormClearErrors,
  UseFormRegisterReturn,
  UseFormSetValue,
} from 'react-hook-form'
import InputWithLabel from '@/components/common/Input/InputWithLabel'
import { HotPlaceFormDataType } from '@/interfaces/interface'
import FindAddressByStoreName from './FindAddressByStoreName'
import ErrorMessage from '@/components/common/ErrorMessage'

interface StoreInputProps {
  storeRegister: UseFormRegisterReturn<'store'>
  setValue: UseFormSetValue<HotPlaceFormDataType>
  clearErrors: UseFormClearErrors<HotPlaceFormDataType>
  errorMessage?: string
}

export default function StoreInput({
  storeRegister,
  setValue,
  clearErrors,
  errorMessage,
}: StoreInputProps) {
  const [keyword, setKeyword] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setKeyword(value)
  }

  return (
    <div className="relative mb-2 w-full">
      <InputWithLabel
        register={storeRegister}
        label="스토어명"
        type="text"
        onChange={onChange}
        className="mb-1"
      />
      <FindAddressByStoreName
        setValue={setValue}
        keyword={keyword}
        clearErrors={clearErrors}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  )
}
