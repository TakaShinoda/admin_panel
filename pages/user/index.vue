<script setup lang="ts">
  const submit = () => {
    console.log('submit')
  }
  const name = ref('')
  const email = ref('')
</script>

<template>
  <div>
    <h1>ユーザ登録</h1>
    <v-sheet class="ma-4">
      <v-form @submit.prevent="submit">
        <v-row>
          <v-col cols="2">
            <v-list-subheader>
              ユーザ名
            </v-list-subheader>
          </v-col>
          <v-col cols="10">
            <v-text-field
              v-model="name"
              label="ユーザ名"
            >
            </v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="2">
            <v-list-subheader>
              メールアドレス
            </v-list-subheader>
          </v-col>
          <v-col cols="10">
            <v-text-field
              v-model="email"
              label="メールアドレス"
              type="email"
            >
            </v-text-field>
          </v-col>
        </v-row>

        <v-btn color="light-blue-accent-4" type="submit" class="mt-4 w-20">Submit</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>
