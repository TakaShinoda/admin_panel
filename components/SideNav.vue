<script setup lang="ts">
  const menus = [
    {
      name: 'Top',
      path: '/'
    },
    {
      name: 'User',
      path: '/user'
    }
  ]
</script>

<template>
  <v-navigation-drawer permanent>
    <v-list>
      <v-list-item
        v-for="(menu, i) in menus"
        :key="i"
        :to="menu.path"
      >
        <v-list-item-title class="text-h6">
          {{ menu.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
