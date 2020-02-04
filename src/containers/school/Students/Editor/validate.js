import { t } from 'i18n'

export default function validate({ name, surname, login, passwd }) {
  const errors = {}
  if (!name) {
    errors.name = t('form.field.required')
  }
  if (!surname) {
    errors.surname = t('form.field.required')
  }
  if (!login) {
    errors.login = t('form.field.required')
  }
  if (!passwd) {
    errors.passwd = t('form.field.required')
  } else if (passwd.length < 3) {
    errors.passwd = t('form.field.passwordMinLength')
  }
  return errors
}
