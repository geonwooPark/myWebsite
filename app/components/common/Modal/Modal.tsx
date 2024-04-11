import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Button from '../../common/Button'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  body?: React.ReactElement
  footer?: React.ReactElement
  onSubmit: () => void
  actionLabel: string
  secondaryActionLabel?: string
  isLoading?: boolean
}

export default function Modal({
  isOpen,
  onClose,
  title,
  body,
  footer,
  onSubmit,
  actionLabel,
  secondaryActionLabel,
  isLoading,
}: ModalProps) {
  const [showModalCard, setShowModalCard] = useState(isOpen)

  const handleClose = () => {
    setShowModalCard(false)
    setTimeout(() => onClose(), 300)
  }

  useEffect(() => {
    setShowModalCard(isOpen)
  }, [isOpen])

  return (
    <div
      className="fixed inset-0 z-[200] flex h-full w-full items-center justify-center bg-black/50"
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`mx-auto h-full w-full transition duration-300 md:h-[auto] md:w-[300px] ${
          showModalCard
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0'
        }`}
      >
        <div className={`modal-shadowed h-full w-full`}>
          {/* 헤더 */}
          <div className="flex justify-between p-4 text-beige-normal">
            <div className="font-point text-lg">{title}</div>
            <button onClick={handleClose}>
              <AiOutlineClose size={20} />
            </button>
          </div>
          {/* 바디 */}
          <div className="p-4">{body}</div>
          {/* 푸터 */}
          <div className="p-4">
            <div className="flex justify-center gap-2">
              {secondaryActionLabel && (
                <Button
                  type="button"
                  level="outline"
                  size="s"
                  fullWidth={true}
                  label={secondaryActionLabel}
                  onClick={handleClose}
                />
              )}
              <Button
                type="button"
                level="primary"
                size="s"
                fullWidth={true}
                label={actionLabel}
                disabled={isLoading}
                onClick={onSubmit}
              />
            </div>
            {footer}
          </div>
        </div>
      </div>
    </div>
  )
}
