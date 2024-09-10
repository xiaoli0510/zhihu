const moduleRoutes = import.meta.glob(['@/views/*/*.vue','!@/views/*/component/*.vue']);//导入views/test的所有组件

export {moduleRoutes}
