<script>
import Vue from "vue";
import Component from "vue-class-component";

import { RouteName } from "@/common/const/route-name.const";

@Component({
  props: ["user"]
})
export default class UserPreviewBase extends Vue {
  routes = RouteName;
}
</script>
