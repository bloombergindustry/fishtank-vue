import { Column, IsBoxType } from "../types/boxTypes"
import Vue from "vue"

export default Vue.extend({
  render(createElement) {
    return createElement(
        (this as any).tagElement, (this as any).boxProps, this.$slots.default
      )
  },
  props:{
    tag:{
      default:'div',
      required:false,
      type:String,
      validator: function (value: IsBoxType) {
        return ["div", "span", "section", "article", "aside", "footer", "header", "details", "figcaption", "figure", "main", "nav", "summary", "time"].indexOf(value) !== -1
      },
      description:"Box semantic element"
    },
    as:{
      default:'div',
      required:false,
      type:String,
      validator: function (value: IsBoxType) {
        return ["div", "span", "section", "article", "aside", "footer", "header", "details", "figcaption", "figure", "main", "nav", "summary", "time"].indexOf(value) !== -1
      },
      description:"Box semantic element"
    },
    xsColumn: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Column){
        return (0<value && 13>value)
      },
      description:'Box grid columns - XS Breakpoint',
    },
    smColumn: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Column){
        return (0<value && 13>value)
      },
      description:'Box grid columns  - SM Breakpoint',
    },
    mdColumn: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Column){
        return (0<value && 13>value)
      },
      description:'Box grid columns  - MD Breakpoint',
    },
    lgColumn: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Column){
        return (0<value && 13>value)
      },
      description:'Box grid columns - LG Breakpoint',
    },
    xlColumn: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Column){
        return (0<value && 13>value)
      },
      description:'Box grid columns - LG Breakpoint',
    },
  },
  computed:{
    tagElement () {
      return  ((this as any).as === undefined ?  (this as any).tag : (this as any).as)
    }
  }
})