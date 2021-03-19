// import site settings from '@/static/data/site-settings.json'
import siteSettings from '@/static/data/site-settings.json'

export const state = () => ({
  title: siteSettings.title,
  copyright: siteSettings.footer.copyright,
})
