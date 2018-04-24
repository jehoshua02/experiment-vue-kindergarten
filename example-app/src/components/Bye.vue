<template>
  <div>
    <h1>Bye!</h1>
    <router-link to="/">Hello</router-link>
    <span>|</span>
    <router-link to="/secret">Secret</router-link>
    <p v-if="$isAllowed('viewParagraph')">This paragraph is secret!</p>
  </div>
</template>

<script>
import ByePerimeter from '../perimeters/ByePerimeter'
export default {
    perimeters: [
        ByePerimeter
    ]
}
</script>