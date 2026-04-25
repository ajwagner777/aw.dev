import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined
const analyticsEnabled = Boolean(measurementId)

let isInitialized = false
let hasClickListener = false

function trim(value: string | null | undefined, maxLength = 120): string {
  if (!value) {
    return ''
  }

  return value.replace(/\s+/g, ' ').trim().slice(0, maxLength)
}

function initAnalytics() {
  if (!analyticsEnabled || isInitialized || !measurementId) {
    return
  }

  ReactGA.initialize(measurementId)
  isInitialized = true
}

function installGlobalClickTracking() {
  if (!analyticsEnabled || hasClickListener) {
    return
  }

  const onDocumentClick = (event: MouseEvent) => {
    const element = (event.target as HTMLElement | null)?.closest('a,button,[role="button"],input[type="button"],input[type="submit"]')

    if (!element) {
      return
    }

    const content = trim(element.textContent) || trim(element.getAttribute('aria-label')) || trim(element.getAttribute('title')) || 'unlabeled'
    const href = trim(element.getAttribute('href')) || ''
    const targetType = element.tagName.toLowerCase()

    ReactGA.event('site_click', {
      click_text: content,
      click_target: targetType,
      click_url: href,
      page_path: window.location.pathname,
    })
  }

  document.addEventListener('click', onDocumentClick, true)
  hasClickListener = true
}

export function AnalyticsTracker() {
  const location = useLocation()

  useEffect(() => {
    initAnalytics()
    installGlobalClickTracking()
  }, [])

  useEffect(() => {
    if (!analyticsEnabled || !isInitialized) {
      return
    }

    ReactGA.send({
      hitType: 'pageview',
      page: `${location.pathname}${location.search}`,
      title: document.title,
    })
  }, [location.pathname, location.search])

  return null
}
