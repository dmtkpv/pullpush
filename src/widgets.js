import Vue from 'vue'
import Data from '@/common/services/data'

const widgetDefaults = {
    icon: '♠',
    options: [],
    toString () {}
}

const optionsDefault = {
    options: {}
}

const widgets = require.context('@/components/widgets', false);
widgets.keys().forEach(path => widget(widgets(path)));

export function widget (data) {
    const config = { ...widgetDefaults, ...data.config };
    config.id = config.name;
    config.options = config.options.map(option => ({ ...optionsDefault, ...option }));
    Vue.component(config.name, data.default);
    Data.addItem('widgets', config, false);
}
