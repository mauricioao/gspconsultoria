<template>
  <q-layout view="lHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>


        <q-toolbar-title>
          GSP Consultoría
        </q-toolbar-title>


        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleSideMenu" />

      </q-toolbar>
    </q-header>

    <q-drawer v-model="sideMenuOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          GSP Consultoría
        </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { linksList } from '../router/link-list';
import useGsp from '../composables/useGsp';

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup() {
    const { sideMenuOpen, toggleSideMenu } = useGsp();

    return {
      linksList,
      sideMenuOpen, toggleSideMenu
    }
  }
})
</script>

<style scoped></style>
