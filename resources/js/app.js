import '../css/app.css';
import '../css/tailwind.css';

import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import Container from '@/components/Container.vue';
import PageTitleSection from '@/components/PageTitleSection.vue';

import { useColorMode } from '@vueuse/core';
import { useThemePreset } from '@/composables/useThemePreset';

import 'primeflex/primeflex.css';
import { createPinia } from 'pinia'

// tras los imports de PrimeVue en resources/js/app.js
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';



// Site light/dark mode
const colorMode = useColorMode({ emitAuto: true });

// Site theme preset
const { getCurrentPreset } = useThemePreset();
const themePreset = getCurrentPreset();

/* global Ziggy */
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.vue`,
            import.meta.glob('./pages/**/*.vue')
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })            
            .provide('colorMode', colorMode)
            .use(plugin)
            .use(ZiggyVue, Ziggy)            
            .use(PrimeVue, {
                theme: {
                    preset: themePreset,
                    options: {
                        darkModeSelector: '.dark',
                        cssLayer: {
                            name: 'primevue',
                            order: 'tailwind-theme, tailwind-base, primevue, tailwind-utilities',
                        },
                    },
                },
            })
            .use(ToastService)
            .component('InertiaHead', Head)
            .component('InertiaLink', Link)
            .component('Container', Container)
            .component('PageTitleSection', PageTitleSection)
            .component('DataTable', DataTable)
            .component('Column', Column)
            .component('Button', Button)            
            .mount(el);
    },
    progress: {
        color: 'var(--p-primary-500)',
    },
});
