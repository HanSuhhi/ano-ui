export interface DialogOptions {
  title?: string
  message?: string
  showConfirmButton?: boolean
  showCancelButton?: boolean
  confirmButtonText?: string
  cancelButtonText?: string
}

export interface DialogRef {
  showDialog: (options: DialogOptions) => void
  confirm: () => void
  cancel: () => void
}
