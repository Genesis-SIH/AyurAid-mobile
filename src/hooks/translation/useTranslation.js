import translations from "../../utils/translations"
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js'
import { Language } from "../../redux/store/useStore";

export default function useTranslation(){

    const selectedLanguage = Language()

    const i18n = new I18n(translations)
    i18n.locale = selectedLanguage  || Localization.locale
    i18n.enableFallback = true
    i18n.defaultLocale = "en"

    return i18n
}