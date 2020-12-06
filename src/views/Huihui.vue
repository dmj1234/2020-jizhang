<template>
  <Layout  class-prefix="layout">
    {{record}}
       <NumberPad @update:value="onUpdateAmount"/>
       <Types :value.sync="record.type"  />
       <Notes @update:value="onUpdateNotes"/>
       <Tags :data-source.sync="tags"
             @update:value="onUpdateTags"/>
  </Layout>
  </template>

<script lang="ts">
import Vue from  'vue'
import NumberPad from '@/components/Huihui/NumberPad.vue';
import Tags from '@/components/Huihui/Tags.vue';
import Types from '@/components/Huihui/Types.vue';
import Notes from '@/components/Huihui/Notes.vue';
import {Component} from 'vue-property-decorator';

type Record = {
  tags: string[] ;
  notes: string;
  type: string;
  amount: number;
}

@Component({
  components:{Tags , Notes , Types, NumberPad}
})
export  default  class  Huihui extends  Vue {
  tags= ['衣', '食' ,'住', '行'];
  record: Record = {
    tags:[], notes:'', type:'-', amount:0
  };

  onUpdateTags(value: string[]){
    this.record.tags= value;
  }
  onUpdateNotes(value: string) {
    this.record.notes= value;
  }
  onUpdateAmount(value: string) {
    this.record.amount=parseFloat(value)
  }
}
</script>


<style lang="scss">
.layout-content{
  border:3px solid darkgrey;
  display: flex;
  flex-direction: column-reverse;
}
</style>
