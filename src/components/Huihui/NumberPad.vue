<!--suppress ALL -->
<template>
  <div class="numberPad">
    <div class="output">{{output}}</div>
    <div class="buttons">
      <button @click="inputCount">1</button>
      <button @click="inputCount">2</button>
      <button @click="inputCount">3</button>
      <button @click="remove">删除</button>
      <button @click="inputCount">4</button>
      <button @click="inputCount">5</button>
      <button @click="inputCount">6</button>
      <button  @click="clear">清空</button>
      <button @click="inputCount">7</button>
      <button @click="inputCount">8</button>
      <button @click="inputCount">9</button>
      <button  class="ok" @click="ok">ok</button>
      <button @click="inputCount" class="zero">0</button>
      <button @click="inputCount" >.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Prop} from 'vue-property-decorator';
@Component
export default  class  NumberPad extends Vue {
 @Prop() readonly  value!: number;
output = this.value.toString();
  inputCount(event: MouseEvent) {
      const button = (event.target as HTMLButtonElement);
      const input = button.textContent!;
      if(this.output.length === 16){return;}
      if(this.output=== '0') {
        if ('0123456789'.indexOf(input) >= 0) {
          this.output = input;
        } else {
          this.output += input;
        }
        return;
      }
      if (this.output.indexOf('.') >= 0 && input == '.') {return;}
      this.output += input;
      }
       remove(){
    if (this.output.length === 1){
      this.output ='0';
    }else{
      this.output = this.output.slice(0 , -1);
    }
       }
     clear() {
      this.output = '0';
     }

    ok() {
     this.$emit('update:value', this.output);
     this.$emit('submit',this.output);
     this.output = '0';
    }
    }


</script>

<style lang="scss" scoped>
@import "~@/assets/helper.scss";
.numberPad{
  .output{
    @extend %clearFix;
    font-size: 36px;
    font-family: Consolas,monospace;
    padding: 9px 16px;
    text-align: right;
    min-height:72px;
    box-shadow: inset 0 -5px 5px -5px fade-out(black,0.6),
    inset 0 5px 5px -5px fade-out(black,0.6)

  }
  .buttons{
    @extend %clearFix;
    @extend %innerShadow;

    >button{
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      &.ok{
        height: 64*2px;
        float: right;
      }
      &.zero{
        width: 25%*2;
      }

      $bg:#f2f2f2;
      &:nth-child(1){
        background: $bg;
      }
      &:nth-child(2),&:nth-child(5){
        background: darken($bg,4%);
      }
      &:nth-child(3),&:nth-child(6),&:nth-child(9){
        background: darken($bg,4*2%);
      }
      &:nth-child(4),&:nth-child(7),&:nth-child(10){
        background: darken($bg,4*3%);
      }
      &:nth-child(8),&:nth-child(11),&:nth-child(13){
        background: darken($bg,4*4%);
      }
      &:nth-child(14){
        background: darken($bg,4*5%);
      }
      &:nth-child(12){
        background:darken($bg,4*6%);
      }
    }
  }
}
</style>