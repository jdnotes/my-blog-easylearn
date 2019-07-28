import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/home.vue'
import Info from '@/components/info/info.vue'
import About from '@/components/about/about.vue'
import Tags from '@/components/tags/tags.vue'
import TagList from '@/components/tags/taglist.vue'
import Contact from '@/components/contact/contact.vue'
import Editor from '@/components/edit/editor.vue'
import NotFound from '@/components/pub/404.vue'

Vue.use(Router)

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/info/:id',
      name: 'info',
      component: Info
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/tags',
      name: 'tags',
      component: Tags
    },
    {
      path: '/taglist',
      name: 'taglist',
      component: TagList
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
