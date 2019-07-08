import Vue, { VNode } from 'vue'
import Router, { RouterOptions } from 'vue-router'

Vue.use(Router)

export default new Router(<RouterOptions>{
  routes: [
    {
      path: '/',
      component: () => import("./Index.vue")
    },
    {
      path: '/cards',
      component: () => import("./views/Cards.vue")
    },
    {
      path: '/modals',
      component: () => import("./views/Modals.vue")
    },
    {
      path: '/buttons',
      component: () => import("./views/Buttons.vue")
    },
    {
      path: '/buttonsV2',
      component: () => import("./views/ButtonsV2.vue")
    }
    ,{
      path: '/radios',
      component: () => import("./views/Radios.vue")
    },
    {
      path: '/switches',
      component: () => import("./views/Switches.vue")
    },
    {
      path: '/badges',
      component: () => import("./views/Badges.vue")
    },
    {
      path: '/numberbadges',
      component: () => import("./views/NumberBadges.vue")
    },
    {
      path: '/tags',
      component: () => import("./views/Tags.vue")
    },
    {
      path: '/verticaltabs',
      component: () => import("./views/VerticalTabs.vue")
    },
    {
      path: '/textinput',
      component: () => import("./views/TextInput.vue")
    },
    {
      path: '/textinputv2',
      component: () => import("./views/TextInputV2.vue")
    },
    {
      path: '/textarea',
      component: () => import("./views/TextArea.vue")
    },
    {
      path: '/spinnerloader',
      component: () => import("./views/SpinnerLoader.vue")
    },
    {
      path: '/checkboxes',
      component: () => import("./views/Checkboxes.vue")
    },
    {
      path: '/checkboxesv2',
      component: () => import("./views/CheckboxesV2.vue")
    },
    {
      path: '/buttongroup',
      component: () => import("./views/ButtonGroup.vue")
    },
    {
      path: '/contentloaders',
      component: () => import("./views/ContentLoaders.vue")
    },
    {
      path: '/tabs',
      component: () => import("./views/Tabs.vue")
    },
    {
      path: '/tables',
      component: () => import("./views/Tables.vue")
    },
    {
      path: '/text',
      component: () => import("./views/Text.vue")
    },
    {
      path: '/heading',
      component: () => import("./views/Heading.vue")
    },
    {
      path: '/pagination',
      component: () => import("./views/Pagination.vue")
    },
    {
      path: '/accordions',
      component: () => import("./views/Accordions.vue")
    },
    {
      path: '/box',
      component: () => import("./views/Box.vue")
    },
    {
      path: '/select',
      component: () => import("./views/Select.vue")
    },
    {
      path: '/alerts',
      component: () => import("./views/Alerts.vue")
    },
    {
      path: '/lookup',
      component: () => import("./views/Lookup.vue")
    },
    {
      path: '/container-columns',
      component: () => import("./views/ContainerAndColumns.vue")
    },
    {
      path: '/tooltips',
      component: () => import("./views/Tooltip.vue")
    }
  ]
})
