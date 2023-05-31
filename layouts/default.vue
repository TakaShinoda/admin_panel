<template>
  <v-app>
    <Header />
    <SideNav />
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>
