import { createContext, useState, useContext, cloneElement } from 'react'
import { VisuallyHidden } from '@reach/visually-hidden'
import { Dialog } from '@reach/dialog'

const callAll =
  (...fns) =>
  (...args) =>
    fns.forEach((fn) => fn && fn(...args))

const ModalContext = createContext()

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false)

  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />
}

function ModalDismissButton({ children: child }) {
  const [, setIsOpen] = useContext(ModalContext)
  return cloneElement(child, {
    onClick: callAll(() => setIsOpen(false), child.props.onClick)
  })
}

function ModalOpenButton({ children: child }) {
  const [, setIsOpen] = useContext(ModalContext)
  return cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props.onClick)
  })
}

function ModalContentsBase(props) {
  const [isOpen, setIsOpen] = useContext(ModalContext)
  return (
    <Dialog
      className="mx-auto my-[20vh] max-w-md rounded pb-14 sm:mx-auto sm:my-[10vh] sm:w-full"
      isOpen={isOpen}
      onDismiss={() => setIsOpen(false)}
      {...props}
    />
  )
}

function ModalContents({ title, children, ...props }) {
  return (
    <ModalContentsBase {...props}>
      <div className="flex justify-end">
        <ModalDismissButton>
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-solid border-gray-500 bg-white p-0 leading-none hover:border-red-500">
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </button>
        </ModalDismissButton>
      </div>
      <h3 className="text-center text-3xl">{title}</h3>
      {children}
    </ModalContentsBase>
  )
}

export { Modal, ModalDismissButton, ModalOpenButton, ModalContents }
