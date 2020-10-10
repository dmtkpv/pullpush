const ctx = {
    icons: require.context('@/common/icons'),
    widgets: require.context('@/components/widgets'),
}

function getName (path) {
    return path.split('/').pop().replace(/\.\w+$/, '')
}

function extract (ctx) {
    let components = {};
    ctx.keys().forEach(path => components[getName(path)] = ctx(path));
    return components;
}

export const icons = extract(ctx.icons);
export const widgets = extract(ctx.widgets);





