<template>
  <div>
    <Element v-for="(el, key) in pageElement" :key="key"
      :nodes="el" />
    <div class="" v-if="pageElement.length === 0">
      <p>no element.</p>
      <p>please add element</p>
    </div>
    <v-btn @click="() => { this.changePage(2) }">次のページ(固定で2へ移動する)</v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapGetters, mapActions } from 'vuex'
import Element from '@/components/molecule/Element.vue'
import { RootState } from '@/types/store'
import { UnionElement } from '@/types/element'

@Component({
  name: 'Render',
  components: {
    Element
  },
  computed: {
    ...mapGetters(['pageElement'])
  },
  methods: {
    ...mapActions(['changePage'])
  }
})
export default class Render extends Vue {}
</script>
