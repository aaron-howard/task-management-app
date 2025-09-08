/**
 * Utility functions for handling dates from Firestore and other sources
 */

/**
 * Safely converts various date formats to a JavaScript Date object
 * @param {any} date - Date value (Firestore Timestamp, Date, string, or number)
 * @returns {Date|null} - JavaScript Date object or null if invalid
 */
export function toDate(date) {
  if (!date) return null

  // If it's already a Date object
  if (date instanceof Date) {
    return isNaN(date.getTime()) ? null : date
  }

  // If it's a Firestore Timestamp
  if (date && typeof date.toDate === 'function') {
    return date.toDate()
  }

  // If it's a number (timestamp)
  if (typeof date === 'number') {
    const dateObj = new Date(date)
    return isNaN(dateObj.getTime()) ? null : dateObj
  }

  // If it's a string
  if (typeof date === 'string') {
    const dateObj = new Date(date)
    return isNaN(dateObj.getTime()) ? null : dateObj
  }

  return null
}

/**
 * Formats a date to a localized date string
 * @param {any} date - Date value
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} - Formatted date string or 'Invalid Date'
 */
export function formatDate(date, options = {}) {
  const dateObj = toDate(date)
  if (!dateObj) return 'Invalid Date'

  const defaultOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }

  return dateObj.toLocaleDateString(undefined, {
    ...defaultOptions,
    ...options
  })
}

/**
 * Formats a date to a localized date and time string
 * @param {any} date - Date value
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} - Formatted date and time string or 'Invalid Date'
 */
export function formatDateTime(date, options = {}) {
  const dateObj = toDate(date)
  if (!dateObj) return 'Invalid Date'

  const defaultOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }

  return dateObj.toLocaleString(undefined, { ...defaultOptions, ...options })
}

/**
 * Checks if a date is overdue
 * @param {any} date - Date value
 * @returns {boolean} - True if the date is in the past
 */
export function isOverdue(date) {
  const dateObj = toDate(date)
  if (!dateObj) return false
  return dateObj < new Date()
}

/**
 * Formats a date for display in a chip (short format)
 * @param {any} date - Date value
 * @returns {string} - Short formatted date string
 */
export function formatDateForChip(date) {
  const dateObj = toDate(date)
  if (!dateObj) return 'Invalid Date'

  return dateObj.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}
