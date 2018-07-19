/* eslint-disable no-console */
import { expect } from "chai"
import sinon, { spy, stub, restore } from 'sinon'
import { shallow, mount } from "@vue/test-utils"
import {NestedInputCheckbox} from "@/index"
import {
  CheckboxSelected24 as CheckboxSelected,
  CheckboxUnselected24 as CheckboxUnselected
} from "@fishtank/icons-vue"